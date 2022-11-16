import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import backgroundImage from '../public/nice-time.jpg';
import NiceTimeLogo from '../public/NiceTimeLogo.png';

export default function StoreHome({
	backgroundImage,
	icon,
	name,
	tagline,
	location,
}: {
	backgroundImage: StaticImageData;
	icon: StaticImageData;
	name: string;
	tagline: string;
	location: string;
}) {
	return (
		<div className='relative h-[450px] sm:h-[500px] max-w-5xl mx-auto'>
			<Image
				src={backgroundImage}
				alt='Lenovo Wallpaper'
				placeholder='blur'
				className='h-[450px] sm:h-[500px] object-cover sm:rounded-lg'
			/>
			<div className='absolute w-full top-0 bg-gradient-to-r sm:rounded-l-lg from-black/30 sm:from-black/80 via-black/30 sm:via-transparent to-transparent h-full sm:px-10'>
				<div className='flex justify-start items-center max-w-5xl mx-auto h-full'>
					<div className=' space-y-3 sm:space-y-4 text-white px-5 xl:px-0 sm:w-1/2 lg:w-1/2'>
						<Image src={icon} alt='' className='h-20 w-20 rounded-full bg-white' />
						<div className='font-bold text-4xl w-4/5 tracking-wide'>{name.toUpperCase()}</div>
						<div className='text-zinc-300'>{tagline}</div>
						<section className='grid grid-cols-2 gap-5'>
							<Link
								href={`${name.toLowerCase().replace(/\s/g, '-')}`}
								className='flex items-center justify-center space-x-1.5 rounded bg-white hover:bg-zinc-100	cursor-pointer text-black p-2 border border-white group'
							>
								<div className='font-medium'>Selengkapnya</div>
								<ChevronRightIcon
									className='h-4 w-4 group-hover:translate-x-0.5 duration-100'
									strokeWidth={2}
								/>
							</Link>
							<div className='flex items-center justify-center space-x-1.5 border border-white rounded hover:bg-white/10 cursor-pointer group'>
								<a target='_blank' rel='noreferrer noopener' href={location}>
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
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
