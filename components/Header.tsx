import Image from 'next/image';
import { PhoneIcon } from '@heroicons/react/24/outline';
import NiceTimeBackgroundImage from '../public/NiceTimeBackgroundImage.jpg';

export default function Header() {
	return (
		<div className='relative h-[450px] sm:h-[500px]'>
			<Image
				src={NiceTimeBackgroundImage}
				alt='Lenovo Wallpaper'
				placeholder='blur'
				className='h-[450px] sm:h-[500px] object-cover'
			/>
			<div className='absolute w-full top-0 bg-gradient-to-r from-black/30 sm:from-black/80 via-black/30 sm:via-transparent to-transparent h-full'>
				<div className='flex justify-start items-center max-w-5xl mx-auto h-full'>
					<div className=' space-y-3 text-white px-5 xl:px-0 sm:w-1/2 lg:w-1/3'>
						<div className='font-bold text-4xl w-4/5'>CV Arsya Wyata Mandiri</div>
						<div className='font-medium text-lg'>Harmoni Dalam Keselarasan</div>
						<div className='text-zinc-300'>
							Ruko Emerald Avenue 1, Blok EA / A27, Jalan Boulevard Bintaro Jaya CBD Emerald,
							Parigi, Kec. Pd. Aren, Kota Tangerang Selatan, Banten 15227
						</div>
						<section className='grid grid-cols-2 gap-5'>
							<div className='flex items-center justify-center space-x-1.5 rounded bg-white hover:bg-zinc-100	cursor-pointer text-black p-2 border border-white group'>
								<a
									target='_blank'
									rel='noreferrer noopener'
									href='https://goo.gl/maps/RR5648iSD9gr47YC9'
									className='font-medium'
								>
									Lihat Lokasi
								</a>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className={`h-4 w-4 group-hover:translate-x-[1px] duration-200 group-hover:-translate-y-[1px]`}
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={1.5}
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
									/>
								</svg>
							</div>
							<div className='flex items-center justify-center space-x-1.5 rounded border border-zinc-400 hover:bg-white/10 cursor-pointer group'>
								<a href='tel:02122210200'>Hubungi</a>
								<PhoneIcon className='h-4 w-4 group-hover:animate-pulse' />
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
