import { useQuery } from '@apollo/client';

import Post from '../Post/Post';

import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from '../../graphql/queries';

import { FeedContainer } from './FeedStyles';

interface Props {
	topic?: string;
}

const Feed = ({ topic }: Props) => {
	const { data } = !topic
		? useQuery(GET_ALL_POSTS)
		: useQuery(GET_ALL_POSTS_BY_TOPIC, {
				variables: {
					topic: topic
				}
		  });

	const posts: Post[] = !topic ? data?.getPostList : data?.getPostListByTopic;

	return (
		<FeedContainer>
			{posts?.map(post => (
				<Post key={post.id} post={post} />
			))}
		</FeedContainer>
	);
};

export default Feed;
