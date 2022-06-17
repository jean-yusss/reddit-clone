import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import Header from '../components/Header';

import client from '../apollo-client';

import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
	<ApolloProvider client={client}>
		<SessionProvider session={session}>
			<Toaster />
			<div className='h-screen overflow-y-scroll bg-slate-200'>
				<Header />
				<Component {...pageProps} />
			</div>
		</SessionProvider>
	</ApolloProvider>
);

export default App;
