import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Toaster } from 'react-hot-toast';

import Layout from '../components/Layout/Layout';

import client from '../apollo-client';

import '../styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
	<ApolloProvider client={client}>
		<SessionProvider session={session}>
			<Toaster />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</SessionProvider>
	</ApolloProvider>
);

export default App;
