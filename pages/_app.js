import Navbar from '../components/Navbar';
import '../styles/globals.css';
import profilePic from '../public/assets/images/profile_pic.jpg';
import Image from 'next/image';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>	
			<Navbar />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
