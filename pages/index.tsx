import Header from '../components/Header';
import OurCompany from '../components/OurCompany';
import VissionMission from '../components/VissionMission';

export default function Home() {
	return (
		<main className='min-h-screen'>
			<Header />
			<VissionMission />
			<OurCompany />
		</main>
	);
}
