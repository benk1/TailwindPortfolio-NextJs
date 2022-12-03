import Image from 'next/image';
import Link from 'next/link';
import worldCountriesImg from '../public/assets/images/worldMap.jpg';
import { RiRadioButtonFill } from 'react-icons/ri';

const worldCountries = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					// height={30}
					// width={30}
					objectFit="cover"
					src={worldCountriesImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">World Countries</h2>
					<h3>React JS / MaterializeCSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app was built using React JS and is hosted on Github pages.
						Users are able to search properties based on the country, the data
						are fetched from country API and displayed accordingly,you can
						visualize Countries around the globe and view specific details about
						a specific country including their capital city, population of each
						country, name of a certain country plus their specific flag attached
						to each country. you can search each country by Country's name and
						sort them accordingly.
					</p>
					<a
						href="https://github.com/benk1/WorldCountries/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://benk1.github.io/WorldCountries/"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4">Demo</button>
					</a>
				</div>
				<div className="col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl">
					<div className="p-2">
						<p className="pb-2 font-bold text-center">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> React
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> MaterializeCSS
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Github
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Country API
							</p>
						</div>
					</div>
				</div>
				<Link href="/#projects">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
};

export default worldCountries;
