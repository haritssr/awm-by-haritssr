import { EyeIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function VissionMission() {
	return (
		<div className='space-y-10 sm:space-y-0 max-w-5xl mx-auto px-5 lg:px-0 py-20 grid grid-cols-1 sm:grid-cols-2 gap-5'>
			<div className='space-y-5'>
				<EyeIcon className='h-7 w-7' />
				<div className='font-bold text-2xl sm:text-3xl'>Visi Kami</div>
				<div className='text-zinc-500'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, veniam. Deserunt beatae
					nobis tenetur corrupti fugiat alias dicta fugit voluptatibus, tempore quae eos, nam esse
					quidem veniam quas obcaecati! Commodi expedita obcaecati architecto nesciunt veritatis est
					ullam, id suscipit ipsam accusamus dolor debitis voluptas laborum natus repudiandae animi.
					Nihil, dolorum.
				</div>
			</div>
			<div className='space-y-5'>
				<RocketLaunchIcon className='h-7 w-7' />
				<div className='font-bold text-2xl sm:text-3xl'>Visi Kami</div>
				<div className='text-zinc-500'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id, veniam. Deserunt beatae
					nobis tenetur corrupti fugiat alias dicta fugit voluptatibus, tempore quae eos, nam esse
					quidem veniam quas obcaecati! Commodi expedita obcaecati architecto nesciunt veritatis est
					ullam, id suscipit ipsam accusamus dolor debitis voluptas laborum natus repudiandae animi.
					Nihil, dolorum.
				</div>
			</div>
		</div>
	);
}
