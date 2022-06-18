import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';

import Avatar from './Avatar';
import { ADD_POST, ADD_SUBREDDIT } from '../graphql/mutations';
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from '../graphql/queries';
import client from '../apollo-client';
import toast from 'react-hot-toast';

interface FormData {
	postTitle: string;
	postBody: string;
	postImage: string;
	subreddit: string;
}

interface Props {
	subreddit?: string;
}

const PostBox = ({ subreddit }: Props) => {
	const { data: session } = useSession();
	const [imageBoxOpen, setImageBoxOpen] = useState<Boolean>(false);
	const [addPost] = useMutation(ADD_POST, {
		refetchQueries: [GET_ALL_POSTS, 'getPostList']
	});
	const [addSubreddit] = useMutation(ADD_SUBREDDIT);

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async formData => {
		const notification = toast.loading('Creating new Post...');

		try {
			// Query for the subreddit topic.
			const {
				data: { getSubredditListByTopic }
			} = await client.query({
				query: GET_SUBREDDIT_BY_TOPIC,
				variables: { topic: subreddit || formData.subreddit }
			});

			const subredditExists = getSubredditListByTopic.length > 0;

			if (!subredditExists) {
				// Create a new subreddit if it doesn't exist.
				console.log('Creating a new Subreddit!');

				const {
					data: { insertSubreddit: newSubreddit }
				} = await addSubreddit({
					variables: {
						topic: formData.subreddit
					}
				});

				console.log('Creating post...', formData);

				const image = formData.postImage || '';

				const {
					data: { insertPost: newPost }
				} = await addPost({
					variables: {
						body: formData.postBody,
						image: image,
						subreddit_id: newSubreddit.id,
						title: formData.postTitle,
						username: session?.user?.name
					}
				});

				console.log('New post created: ', newPost);
			} else {
				// Use the existing subreddit.
				console.log('Using existing subreddit!');
				console.log(getSubredditListByTopic);

				const image = formData.postImage || '';

				const {
					data: { insertPost: newPost }
				} = await addPost({
					variables: {
						body: formData.postBody,
						image: image,
						subreddit_id: getSubredditListByTopic[0].id,
						title: formData.postTitle,
						username: session?.user?.name
					}
				});

				console.log('New post added: ', newPost);
			}

			// Clear fields after submitting.
			setValue('postBody', '');
			setValue('postImage', '');
			setValue('postTitle', '');
			setValue('subreddit', '');

			toast.success('New Post Created', { id: notification });
		} catch (error) {
			toast.error('Something went wrong!', { id: notification });
		}
	});

	return (
		<form
			className='top-16 z-50 bg-white border rounded-md border-gray-300 p-2'
			onSubmit={onSubmit}
		>
			<div className='flex items-center space-x-3'>
				<Avatar />

				<input
					{...register('postTitle', { required: true })}
					disabled={!session}
					className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
					type='text'
					placeholder={
						session
							? subreddit
								? `Create a post in r/${subreddit}`
								: 'Create Post'
							: 'Please sign in to create a post'
					}
				/>

				<PhotographIcon
					className={`h-6 text-gray-300 cursor-pointer ${
						imageBoxOpen && 'text-blue-300'
					}`}
					onClick={() => setImageBoxOpen(!imageBoxOpen)}
				/>
				<LinkIcon className='h-6 text-gray-300' />
			</div>

			{!!watch('postTitle') && (
				<div className='flex flex-col py-2'>
					<div className='flex items-center px-2'>
						<p className='min-w-[90px]'>Body:</p>
						<input
							type='text'
							placeholder='Text (optional)'
							{...register('postBody')}
							className='m-2 flex-1 bg-blue-50 p-2 outline-none'
						/>
					</div>

					{!subreddit && (
						<div className='flex items-center px-2'>
							<p className='min-w-[90px]'>Subreddit:</p>
							<input
								type='text'
								placeholder='Choose a community'
								{...register('subreddit', { required: true })}
								className='m-2 flex-1 bg-blue-50 p-2 outline-none'
							/>
						</div>
					)}

					{imageBoxOpen && (
						<div className='flex items-center px-2'>
							<p className='min-w-[90px]'>Image:</p>
							<input
								type='text'
								placeholder='Provide the URL to the image'
								{...register('postImage')}
								className='m-2 flex-1 bg-blue-50 p-2 outline-none'
							/>
						</div>
					)}

					{Object.keys(errors).length > 0 && (
						<div className='space-y-2 p-2 text-red-500'>
							{errors.postTitle?.type === 'required' && <p>A Post Title is required</p>}
							{errors.subreddit?.type === 'required' && <p>A Subreddit is required</p>}
						</div>
					)}

					{!!watch('postTitle') && (
						<button
							type='submit'
							className='w-full rounded-full bg-blue-400 p-2 text-white'
						>
							Post
						</button>
					)}
				</div>
			)}
		</form>
	);
};

export default PostBox;
