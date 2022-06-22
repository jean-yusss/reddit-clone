import Link from 'next/link';
import TimeAgo from 'react-timeago';
import { Jelly } from '@uiball/loaders';

import Avatar from '../Avatar/Avatar';
import PostVote from '../PostVote/PostVote';
import PostFooter from '../PostFooter/PostFooter';

import * as S from './PostStyles';

interface Props {
	post: Post;
}

const Post = ({ post }: Props) => {
	// Could also be resolved by SSR.
	if (!post)
		return (
			<S.JellyContainer>
				<Jelly size={50} color='#FF4501' />
			</S.JellyContainer>
		);

	return (
		<Link href={`/post/${post?.id}`}>
			<S.PostContainer>
				<PostVote post={post} />

				<S.Post>
					<S.PostInfoContainer>
						<Avatar seed={post.subreddit[0]?.topic} />
						<S.PostInfo>
							<Link href={`/subreddit/${post.subreddit[0].topic}`}>
								<S.Subreddit>r/{post.subreddit[0]?.topic}</S.Subreddit>
							</Link>
							&nbsp; • Posted by u/{post.username} &nbsp;
							<TimeAgo date={post.created_at} />
						</S.PostInfo>
					</S.PostInfoContainer>

					<S.PostContent>
						<S.PostTitle>{post.title}</S.PostTitle>
						<S.PostBody>{post.body}</S.PostBody>
					</S.PostContent>

					<S.PostImage src={post.image} />

					<PostFooter post={post} />
				</S.Post>
			</S.PostContainer>
		</Link>
	);
};

export default Post;
