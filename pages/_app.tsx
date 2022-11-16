import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from '@next/font/google';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

const inter = Inter();

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	let thisPage;
	if (router.asPath === '/') {
		thisPage = 'Beranda';
	} else {
		const a = router.asPath.slice(1).split('-');
		const arr: string[] = [];
		a.forEach(x => {
			const a = x.charAt(0).toUpperCase();
			const b = x.slice(1);
			const c = a + b;
			arr.push(c);
		});
		thisPage = arr.join(' ');
	}
	const title = `${thisPage} - CV Arsya Wyata Mandiri`;
	return (
		<main className={inter.className}>
			<Head>
				<title>{title}</title>
				<meta name='description' content='' />
				<meta name='author' content='CV Arsya Wyata Mandiri' />
				<meta name='keywords' content='' />
				<meta property='og:title' content='CV Arsya Wyata Mandiri' />
				<meta property='og:site_name' content='CV Arsya Wyata Mandiri' />
				<meta property='og:description' content='' />
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://mixaperkasa.com/' />
				<meta name='twitter:card' content='summary' />
				<meta name='twitter:title' content='CV Arsya Wyata Mandiri' />
				<meta name='twitter:description' content='' />
				<link rel='icon' type='image/x-icon' href='/favicon.ico' />
			</Head>
			<Navigation />
			<Component {...pageProps} />
			<Footer />
		</main>
	);
}
