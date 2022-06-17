import Head from 'next/head';

import type { NextPage } from 'next';
import PostBox from '../components/PostBox';
import Feed from '../components/Feed';

const HomePage: NextPage = () => {
	return (
		<div className='max-w-5xl my-7 mx-auto'>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<PostBox />

			<div>
				<Feed />
			</div>
		</div>
	);
};

export default HomePage;
