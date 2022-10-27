import Navbar from '../components/Navbar';
import '../styles/globals.css';
import profilePic from '../public/assets/images/profile_pic.jpg';
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Navbar />

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
