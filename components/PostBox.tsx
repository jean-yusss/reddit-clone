import { useSession } from 'next-auth/react';
import Avatar from './Avatar';

const PostBox = () => {
	const { data: session } = useSession();

	return (
		<form>
			<div className='flex items-center space-x-3'>
				<Avatar />

				<input
					disabled={!session}
					className='bg-gray-50 p-2 pl-5 outline-none rounded-md flex-1'
					type='text'
					placeholder={session ? 'Create Post' : 'Please sign in to create a post'}
				/>
			</div>
		</form>
	);
};

export default PostBox;
