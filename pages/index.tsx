import Head from 'next/head';
import type { NextPage } from 'next';

import Feed from '../components/Feed/Feed';
import PostBox from '../components/PostBox/PostBox';
import SubredditRow from '../components/SubredditRow/SubredditRow';

import { useQuery } from '@apollo/client';
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries';

import * as S from '../styles/HomePageStyles';

const HomePage: NextPage = () => {
	const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, { variables: { limit: 10 } });

	const subreddits: Subreddit[] = data?.getSubredditListLimit;

	return (
		<S.HomePageContainer>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<S.HomePageContent>
				<S.FeedContainer>
					<PostBox />
					<Feed />
				</S.FeedContainer>

				<S.SubredditContainer>
					<S.SubredditList>Top Communities</S.SubredditList>
					<>
						{subreddits?.map((subreddit, i) => (
							<SubredditRow key={subreddit.id} topic={subreddit.topic} index={i} />
						))}
					</>
				</S.SubredditContainer>
			</S.HomePageContent>
		</S.HomePageContainer>
	);
};

export default HomePage;
