import {
	ArrowDownIcon,
	ArrowUpIcon,
	BookmarkIcon,
	ChatAltIcon,
	DotsHorizontalIcon,
	GiftIcon,
	ShareIcon
} from '@heroicons/react/outline';
import Avatar from './Avatar';
import TimeAgo from 'react-timeago';
import Link from 'next/link';

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	return (
		<Link href={`/post/${post.id}`}>
			<div className='flex cursor-pointer rounded-md border border-gray-300 bg-white shadow-sm hover:border hover:border-gray-600'>
				<div className='flex flex-col items-center justify-start space-y-1 rounded-l-md bg-gray-50 p-4 text-gray-400'>
					<ArrowUpIcon className='voteButton hover:text-red-400' />
					<p className='text-black font-bold text-xs'>0</p>
					<ArrowDownIcon className='voteButton hover:text-blue-400' />
				</div>

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

					<div className='flex space-x-4 text-gray-400'>
						<div className='postButton'>
							<ChatAltIcon className='h-6 w-6' />
							<p>{post.comments.length} Comments</p>
						</div>

						<div className='postButton'>
							<GiftIcon className='h-6 w-6' />
							<p className='hidden sm:inline'>Award</p>
						</div>

						<div className='postButton'>
							<ShareIcon className='h-6 w-6' />
							<p className='hidden sm:inline'>Share</p>
						</div>

						<div className='postButton'>
							<BookmarkIcon className='h-6 w-6' />
							<p className='hidden sm:inline'>Save</p>
						</div>

						<div className='postButton'>
							<DotsHorizontalIcon className='h-6 w-6' />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Post;
