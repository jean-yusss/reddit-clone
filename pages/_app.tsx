import { SessionProvider } from 'next-auth/react';

import type { AppProps } from 'next/app';
import Header from '../components/Header';

import '../styles/globals.css';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => (
	<SessionProvider session={session}>
		<div className='h-screen overflow-y-scroll bg-slate-200'>
			<Header />
			<Component {...pageProps} />
		</div>
	</SessionProvider>
);

export default App;
