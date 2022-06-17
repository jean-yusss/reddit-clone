import Head from 'next/head';

import type { NextPage } from 'next';
import PostBox from '../components/PostBox';

const HomePage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<PostBox />
		</div>
	);
};

export default HomePage;
