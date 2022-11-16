import {
	CameraIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
	ClipboardIcon,
	MapPinIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { StoresData } from '../StoresData';
import type { StoreDataType } from '../StoresData';
import { useRouter } from 'next/router';
import { Carousel } from '@mantine/carousel';

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = StoresData.map(({ name }) => {
		return { params: { stores: name.toLowerCase().replace(/\s/g, '-') } };
	});
	return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async context => {
	const store = StoresData.filter(
		store => store.name.toLowerCase().replace(/\s/g, '-') === context.params!.stores
	)[0];
	return { props: { store } };
};

export default function TokoPage({ store }: { store: StoreDataType }) {
	async function HandleCopyNumberClick() {
		try {
			await navigator.clipboard.writeText(store.phone);
		} catch (err: any) {
			console.error(err.name, err.message);
		}
	}

	const router = useRouter();
	let thisPage: string = router.asPath.slice(1);
	// console.log(Array.from(Array(9).keys()).slice(1));
	return (
		<>
			<div className='flex items-center text-emerald-700 max-w-5xl mx-auto my-10 px-5 lg:px-0'>
				<ChevronLeftIcon className='h-[18px] w-[18px] sm:h-5 sm:w-5' strokeWidth={2.5} />
				<Link href='/#perusahaan-kami' className='sm:text-xl hover:underline'>
					Perusahaan Kami
				</Link>
			</div>
			<div className='max-w-5xl mx-auto p-5 xl:px-0 space-y-12 sm:space-y-24'>
				{/* Identitas */}
				<section className=' w-full flex flex-col sm:flex-row-reverse sm:justify-between'>
					<div className='sm:w-1/2 flex sm:justify-end mb-5 sm:mb-0'>
						<Image
							src={store.icon}
							alt=''
							width='1000'
							height='1000'
							className='sm:w-56 sm:h-56 sm:object-right'
						/>
					</div>
					<section className='sm:w-2/5 space-y-4'>
						<div className='font-bold text-4xl sm:text-5xl'>{store.name.toUpperCase()}</div>
						<div className='text-zinc-500'>{store.description}</div>
						<section className='grid grid-cols-2 gap-3 w-full'>
							<a
								title='Hubungi kami!'
								href={`tel:${store.phone}`}
								className='flex items-center justify-center space-x-1.5 bg-black text-white px-3 py-1.5 rounded hover:bg-zinc-700 cursor-pointer'
							>
								<PhoneIcon className='h-[18px] w-[18px]' />
								<p>Hubungi</p>
							</a>
							<a
								title='Salin nomor!'
								className='flex items-center justify-center space-x-1.5 border border-black px-3 py-1.5 rounded hover:bg-zinc-100 cursor-grab'
								onClick={HandleCopyNumberClick}
							>
								<ClipboardIcon className='h-[18px] w-[18px]' />
								<p>Salin Nomor</p>
							</a>
							<a
								title='Instagram'
								className='flex items-center justify-center space-x-1.5 border border-zinc-400 px-3 py-1.5 rounded hover:bg-zinc-100 cursor-pointer col-span-2 text-zinc-700'
								href={store.instagram}
								target='_blank'
								rel='noreferrer noopener'
							>
								<InstagramIcon />
								<p>Instagram</p>
							</a>
							{/* <a
								title='Whatsapp'
								href='rel:'
								className='flex items-center justify-center space-x-1.5 border border-zinc-400 px-3 py-1.5 rounded hover:bg-zinc-100 cursor-pointer bg-emerald-50/30'
								onClick={HandleCopyNumberClick}
							>
								<WhatsappIcon />
								<p>Whatsapp</p>
							</a> */}
						</section>
					</section>
				</section>

				{/* Lokasi */}
				<section className='space-y-4'>
					<div className='flex items-center justify-between'>
						<div className='font-bold text-2xl sm:text-3xl'>Lokasi</div>
						<MapPinIcon className='h-6 w-6 sm:h-8 sm:w-8 text-zinc-500' />
					</div>
					<iframe
						src={store.map}
						className='w-full h-[400px] rounded-md'
						allowFullScreen={true}
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
						frameBorder='0'
					/>
				</section>
				<section>
					<div className='flex items-center justify-between mb-4'>
						<div className='font-bold text-2xl sm:text-3xl'>Foto - foto</div>
						<CameraIcon className='h-6 w-6 sm:h-8 sm:w-8 text-zinc-500' />
					</div>
					{/* <div className='grid grid-cols-1 sm:grid-cols-4 gap-5'>
						{Array.from(Array(5).keys())
							.slice(1)
							.map(x => (
								<Image
									src={`/${thisPage}/${x}.jpg`}
									key={x}
									alt=''
									width='1000'
									height='600'
									className='rounded-md'
								/>
							))}
					</div> */}
					<div className='mt-5'>
						<Carousel
							withIndicators
							className='overflow-hidden'
							nextControlIcon={<ChevronRightIcon className='h-6 w-6 text-white -mr-1' />}
							previousControlIcon={<ChevronLeftIcon className='h-6 w-6 text-white -ml-1' />}
							controlSize={40}
						>
							{Array.from(Array(9).keys())
								.slice(1)
								.map(x => (
									<Carousel.Slide className='h-[200px] sm:h-[700px]' key={x}>
										<Image
											src={`/${thisPage}/${x}.jpg`}
											key={x}
											alt=''
											width='3280'
											height='2464'
											className='rounded-md w-full h-[200px] sm:h-[700px] object-cover object-center'
										/>
									</Carousel.Slide>
								))}
						</Carousel>
					</div>
				</section>
			</div>
		</>
	);
}

function InstagramIcon() {
	return (
		<svg
			className='h-[18px] w-[18px] text-zinc-700'
			fill='none'
			shapeRendering='geometricPrecision'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='1.5'
			viewBox='0 0 24 24'
		>
			<rect x='2' y='2' width='20' height='20' rx='5' ry='5' />
			<path d='M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z' />
			<path d='M17.5 6.5h.01' />
		</svg>
	);
}

function WhatsappIcon() {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			// class='icon icon-tabler icon-tabler-brand-whatsapp'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='currentColor'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
			className='h-[18px] w-[18px]'
		>
			<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
			<path d='M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9'></path>
			<path d='M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1'></path>
		</svg>
	);
}
