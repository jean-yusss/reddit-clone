import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import toast from 'react-hot-toast';

import Avatar from '../Avatar/Avatar';
import PostBoxField from '../PostBoxField/PostBoxField';

import client from '../../apollo-client';
import { ADD_POST, ADD_SUBREDDIT } from '../../graphql/mutations';
import { GET_ALL_POSTS, GET_SUBREDDIT_BY_TOPIC } from '../../graphql/queries';

import * as S from './PostBoxStyles';

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
	const [addSubreddit] = useMutation(ADD_SUBREDDIT);
	const [imageBoxOpen, setImageBoxOpen] = useState(false);

	const [addPost] = useMutation(ADD_POST, {
		refetchQueries: [GET_ALL_POSTS, 'getPostList']
	});

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
				const {
					data: { insertSubreddit: newSubreddit }
				} = await addSubreddit({
					variables: { topic: formData.subreddit }
				});

				const image = formData.postImage || '';

				await addPost({
					variables: {
						body: formData.postBody,
						image: image,
						subreddit_id: newSubreddit.id,
						title: formData.postTitle,
						username: session?.user?.name
					}
				});
			} else {
				// Use the existing subreddit.
				const image = formData.postImage || '';

				await addPost({
					variables: {
						body: formData.postBody,
						image: image,
						subreddit_id: getSubredditListByTopic[0].id,
						title: formData.postTitle,
						username: session?.user?.name
					}
				});
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
		<S.PostBoxContainer onSubmit={onSubmit}>
			<S.PostBox>
				<Avatar />

				<S.PostTitle
					disabled={!session}
					placeholder={
						session
							? subreddit
								? `Create a post in r/${subreddit}`
								: 'Create Post'
							: 'Please sign in to create a post'
					}
					{...register('postTitle', { required: true })}
				/>

				<S.PhotoIcon
					$imageBoxOpen={imageBoxOpen}
					onClick={() => setImageBoxOpen(!imageBoxOpen)}
				/>
				<S.Link />
			</S.PostBox>

			{!!watch('postTitle') && (
				<S.PopupContainer>
					<PostBoxField title='Body:'>
						<S.PostBody {...register('postBody')} />
					</PostBoxField>

					{!subreddit && (
						<PostBoxField title='Subreddit:'>
							<S.Subreddit {...register('subreddit', { required: true })} />
						</PostBoxField>
					)}

					{imageBoxOpen && (
						<PostBoxField title='Image:'>
							<S.PostImage {...register('postImage')} />
						</PostBoxField>
					)}

					{Object.keys(errors).length > 0 && (
						<S.ErrorContainer>
							{errors.postTitle?.type === 'required' && (
								<S.Error>A Post Title is required</S.Error>
							)}
							{errors.subreddit?.type === 'required' && (
								<S.Error>A Subreddit is required</S.Error>
							)}
						</S.ErrorContainer>
					)}

					{!!watch('postTitle') && <S.SubmitButton>Post</S.SubmitButton>}
				</S.PopupContainer>
			)}
		</S.PostBoxContainer>
	);
};

export default PostBox;
