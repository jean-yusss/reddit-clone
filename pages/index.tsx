import Head from 'next/head';

import type { NextPage } from 'next';

const HomePage: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Reddit Clone</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
		</div>
	);
};

export default HomePage;
