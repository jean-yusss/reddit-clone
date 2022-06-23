import { useRouter } from 'next/router';

import Avatar from '../../components/Avatar/Avatar';
import Feed from '../../components/Feed/Feed';
import PostBox from '../../components/PostBox/PostBox';

import * as S from '../../styles/SubredditPageStyles';

const SubredditPage = () => {
	const {
		query: { topic }
	} = useRouter();

	return (
		<S.SubredditPageContainer>
			<S.SubredditHeaderContainer>
				<S.SubredditHeader>
					<S.AvatarContainer>
						<Avatar seed={topic as string} large />
					</S.AvatarContainer>

					<S.SubredditInfo>
						<S.SubredditTitle>Welcome to the r/{topic} subreddit</S.SubredditTitle>
						<S.SubredditName>r/{topic}</S.SubredditName>
					</S.SubredditInfo>
				</S.SubredditHeader>
			</S.SubredditHeaderContainer>

			<S.FeedContainer>
				<PostBox subreddit={topic as string} />
				<Feed topic={topic as string} />
			</S.FeedContainer>
		</S.SubredditPageContainer>
	);
};

export default SubredditPage;
