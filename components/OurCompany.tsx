import { BuildingOffice2Icon } from '@heroicons/react/24/outline';
import StoreHome from '../components/StoreHome';
import { StoresHomeData } from '../StoresHomeData';

export default function OurCompany() {
	return (
		<>
			<div className='max-w-5xl mx-auto px-5 xl:px-0 pb-7 space-y-7' id='perusahaan-kami'>
				<BuildingOffice2Icon className='h-7 w-7' />
				<div className='font-bold text-2xl sm:text-3xl'>Perusahaan Kami</div>
			</div>
			<section className='space-y-5 sm:space-y-10'>
				{StoresHomeData.map(({ backgroundImage, icon, name, tagline, location }) => (
					<StoreHome
						key={name}
						name={name}
						backgroundImage={backgroundImage}
						icon={icon}
						tagline={tagline}
						location={location}
					/>
				))}
			</section>
		</>
	);
}
