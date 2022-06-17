import { LinkIcon, PhotographIcon } from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Avatar from './Avatar';

type FormData = {
	postTitle: string;
	postBody: string;
	postImage: string;
	subreddit: string;
};

const PostBox = () => {
	const { data: session } = useSession();
	const [imageBoxOpen, setImageBoxOpen] = useState<Boolean>(false);

	const {
		register,
		setValue,
		handleSubmit,
		watch,
		formState: { errors }
	} = useForm<FormData>();

	const onSubmit = handleSubmit(async formdata => {
		console.log(formdata);
	});

	return (
		<form
			className='sticky top-16 z-50 bg-white border rounded-md border-gray-300 p-2'
			onSubmit={onSubmit}
		>
			<div className='flex items-center space-x-3'>
				<Avatar />

				<input
					{...register('postTitle', { required: true })}
					disabled={!session}
					className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
					type='text'
					placeholder={session ? 'Create Post' : 'Please sign in to create a post'}
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

					<div className='flex items-center px-2'>
						<p className='min-w-[90px]'>Subreddit:</p>
						<input
							type='text'
							placeholder='Choose a community'
							{...register('subreddit', { required: true })}
							className='m-2 flex-1 bg-blue-50 p-2 outline-none'
						/>
					</div>

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
