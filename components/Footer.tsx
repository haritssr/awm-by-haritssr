import Image from 'next/image';
import Link from 'next/link';
import { ClipboardIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';

export default function Footer() {
	const router = useRouter();
	async function HandleFooterMailClick() {
		try {
			await navigator.clipboard.writeText('awm@arsya.co.id askdjfhlaksjdfhlksajdh');
		} catch (err: any) {
			console.error(err.name, err.message);
		}
	}

	async function HandleFooterPhoneClick() {
		try {
			await navigator.clipboard.writeText('(021)-2221-0200');
		} catch (err: any) {
			console.error(err.name, err.message);
		}
	}

	return (
		<footer className='max-w-5xl mx-auto xl:px-0 p-5 mt-20 sm:mt-40'>
			<section className='grid grid-cols-1 gap-10 sm:gap-5 sm:grid-cols-4 mb-10 sm:mb-14'>
				{/* TOTAL */}
				<section className='space-y-2'>
					<Image src='/awm.png' alt='awm logo' width='50' height='50' />
					<div className='text-xl font-semibold sm:w-4/5'>CV Arsya Wyata Mandiri</div>
				</section>

				{/* HALAMAN WEB */}
				<section className='flex flex-col space-y-2'>
					<div className='font-medium'>HALAMAN WEB</div>
					{nav.map(({ href, name }) => (
						<Link
							key={name}
							className={`${
								router.asPath === href ? 'text-emerald-700 font-medium underline' : 'text-zinc-400'
							} hover:text-emerald-700 hover:underline`}
							href={href}
						>
							{name}
						</Link>
					))}
				</section>

				{/* KONTAK DAN SOSIAL MEDIA */}
				<section className='space-y-2'>
					<div className='font-medium'>KONTAK DAN SOSIAL MEDIA</div>
					<div className='flex items-center space-x-2 text-zinc-400 hover:text-zinc-600 group cursor-pointer'>
						<PhoneIcon className='h-[18px] w-[18px]' />
						<a title='Telepon kami sekarang!' href='tel:02122210200'>
							(021)-2221-0200
						</a>
						<a
							title='Salin nomor telepon'
							className='hover:border-green-200 border border-white rounded p-[1px]'
						>
							<ClipboardIcon
								onClick={HandleFooterPhoneClick}
								className='h-[18px] w-[18px] group-hover:text-emerald-700 group-hover:fill-emerald-50 text-transparent cursor-pointer'
							/>
						</a>
					</div>
					<div className='flex items-center space-x-2 text-zinc-400 hover:text-zinc-600 group cursor-pointer'>
						<EnvelopeIcon className='h-[18px] w-[18px]' />
						<a title='Kirim pesan ke kami sekarang!' href='mailto:awm@arsya.co.id '>
							awm@arsya.co.id
						</a>

						<a
							title='Salin alamat email'
							className='hover:border-green-200 border border-white rounded p-[1px]'
						>
							<ClipboardIcon
								onClick={HandleFooterMailClick}
								className='h-[18px] w-[18px] group-hover:text-emerald-700 group-hover:fill-emerald-50 text-transparent cursor-pointer'
							/>
						</a>
					</div>
				</section>

				{/* LOKASI */}
				<section className='space-y-2'>
					<div className='font-medium'>LOKASI</div>
					<div className='text-zinc-400'>
						Ruko Emerald Avenue 1, Blok EA / A27, Jalan Boulevard Bintaro Jaya CBD Emerald, Parigi,
						Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15227
					</div>
				</section>
			</section>
			<section className='text-zinc-400 sm:justify-center text-sm items-center flex flex-col space-y-1 sm:space-y-0 sm:space-x-2 sm:flex-row'>
				<div>© {new Date().getFullYear()} CV Asriyasa Wyata Mandiri.</div>
				<div>All Rights Reserved.</div>
			</section>
		</footer>
	);
}

const nav = [
	{ href: '/', name: 'Beranda' },
	{ href: '/nice-time', name: 'Nice Time' },
	{ href: '/arsya-buah', name: 'Arsya Buah' },
	// { href: '/arsya-catering', name: 'Arsya Catering' },
];
