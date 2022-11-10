import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Oswald } from '@next/font/google';

const oswald = Oswald();

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={oswald.className}>
			<Component {...pageProps} />
		</main>
	);
}
