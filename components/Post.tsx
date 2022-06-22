import Link from 'next/link';
import TimeAgo from 'react-timeago';
import { Jelly } from '@uiball/loaders';

import Avatar from './Avatar/Avatar';
import PostVote from './PostVote/PostVote';
import PostFooter from './PostFooter/PostFooter';

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	// Could also be resolved by SSR.
	if (!post)
		return (
			<div className='flex w-full items-center justify-center p-10 text-xl'>
				<Jelly size={50} color='#FF4501' />
			</div>
		);

	return (
		<Link href={`/post/${post?.id}`}>
			<div className='flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
				<PostVote post={post} />

				<div className='p-3 pb-1'>
					<div className='flex items-center space-x-2'>
						<Avatar seed={post.subreddit[0]?.topic} />
						<p className='text-xs text-gray-400'>
							<Link href={`/subreddit/${post.subreddit[0].topic}`}>
								<span className='font-bold text-black hover:text-blue-400 hover:underline'>
									r/{post.subreddit[0]?.topic}
								</span>
							</Link>
							&nbsp; • Posted by u/{post.username} &nbsp;
							<TimeAgo date={post.created_at} />
						</p>
					</div>

					<div className='py-4'>
						<h2 className='text-xl font-semibold'>{post.title}</h2>
						<p className='mt-2 text-sm font-light'>{post.body}</p>
					</div>

					<img src={post.image} alt='' className='w-full' />

					<PostFooter post={post} />
				</div>
			</div>
		</Link>
	);
};

export default Post;
