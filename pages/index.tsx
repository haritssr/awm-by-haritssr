export default function Home() {
	return (
		<div className='px-10 sm:px-56  bg-zinc-200 flex-col py-10 flex min-h-screen justify-center items-center space-y-10'>
			<section className="font-['Mona_Sans']">
				<div className='text-3xl mb-2'>Mona Sans</div>
				<p className='text-2xl font-semibold'>
					A strong and versatile typeface, designed with Degarism and inspired by industrial-era
					grotesques. Mona Sans works well across product, web, and print. Q.
				</p>
			</section>

			<section className={`font-['Hubot_Sans']`}>
				<div className='text-3xl mb-2'>Hubot Sans</div>
				<p className='text-2xl font-semibold'>
					A strong and versatile typeface, designed with Degarism and inspired by industrial-era
					grotesques. Mona Sans works well across product, web, and print. Q.
				</p>
			</section>

			<section className=''>
				<div className='text-3xl mb-2'>Inter</div>
				<p className='text-2xl font-semibold'>
					A strong and versatile typeface, designed with Degarism and inspired by industrial-era
					grotesques. Mona Sans works well across product, web, and print. Q.
				</p>
			</section>
		</div>
	);
}
