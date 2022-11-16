import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Navigation() {
	const [open, setOpen] = useState<boolean>(false);
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

	return (
		<div className='sticky top-0 z-50 bg-white/70 backdrop-blur-md'>
			<nav className='flex items-center justify-between py-3 max-w-5xl mx-auto px-5 xl:py-3 xl:px-0'>
				<Link href='/' className='space-x-2 flex items-center justify-center'>
					<Image src='/awm.png' alt='awm logo' width='40' height='40' />
					<p className='hidden sm:block font-semibold rounded-full border border-zinc-400 text-zinc-800 hover:bg-zinc-100 px-4 py-1 '>
						CV Arsya Wyata Mandiri
					</p>
				</Link>
				<section className='relative flex justify-end  w-1/2 sm:hidden '>
					<div className=''>
						<div
							className={`flex items-center w-fit space-x-1 py-0.5 px-3 rounded-full border ${
								open ? 'border-zinc-400' : 'border-black'
							}`}
							onClick={() => setOpen(!open)}
						>
							<div className={`text-tiny ${open ? 'text-zinc-400' : 'text-zinc-800'}`}>
								{thisPage}
							</div>
							<ChevronDownIcon
								className={`h-5 w-5 ${open ? 'rotate-180 text-zinc-400' : 'text-zinc-800'}`}
							/>
						</div>
						{open && (
							<div className=' divide-y border border-zinc-800 divide-zinc-800 absolute flex flex-col w-fit right-0 mt-2 rounded-md bg-white'>
								{nav.map(({ href, name, icon }) => (
									<div className='flex items-center space-x-1 p-2' key={name}>
										<Image src={`${icon}`} width='20' height='20' alt={name} />
										<Link
											href={href}
											className='block cursor-pointer hover:bg-blue-500  text-tiny'
											onClick={() => setOpen(false)}
										>
											{name}
										</Link>
									</div>
								))}
							</div>
						)}
					</div>
				</section>
				<div className='hidden sm:block'>
					<section className='flex items-center space-x-5 sm:space-x-8 text-tiny '>
						{nav.map(({ href, name }) => (
							<Link
								key={name}
								className={`${
									router.asPath === href
										? 'text-emerald-700 font-medium underline'
										: 'text-zinc-800'
								} hover:text-emerald-700 hover:underline`}
								href={href}
							>
								{name}
							</Link>
						))}
					</section>
				</div>
			</nav>
		</div>
	);
}

const nav = [
	{ href: '/', name: 'Beranda', icon: '/awm.png' },
	{ href: '/nice-time', name: 'Nice Time', icon: '/NiceTimeLogo.png' },
	{ href: '/arsya-buah', name: 'Arsya Buah', icon: '/ArsyaBuahLogo.png' },
	// { href: '/arsya-catering', name: 'Arsya Catering', icon: '/ArsyaCateringLogo.png' },
];
