import Head from 'next/head';

import type { NextPage } from 'next';

import Header from '../components/Header';

const HomePage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
		</div>
	);
};

export default HomePage;
