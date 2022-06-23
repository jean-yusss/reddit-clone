import Head from 'next/head';

import type { NextPage } from 'next';
import PostBox from '../components/PostBox/PostBox';
import Feed from '../components/Feed/Feed';
import { useQuery } from '@apollo/client';
import { GET_SUBREDDITS_WITH_LIMIT } from '../graphql/queries';
import SubredditRow from '../components/SubredditRow/SubredditRow';

const HomePage: NextPage = () => {
	const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, { variables: { limit: 10 } });

	const subreddits: Subreddit[] = data?.getSubredditListLimit;

	return (
		<div className='max-w-5xl my-7 mx-auto'>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='flex'>
				<div className='w-full'>
					<PostBox />
					<Feed />
				</div>

				<div className='mx-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline'>
					<p className='text-md mb-1 p-4 pb-3 font-bold'>Top Communities</p>
					<div>
						{subreddits?.map((subreddit, i) => (
							<SubredditRow key={subreddit.id} topic={subreddit.topic} index={i} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
