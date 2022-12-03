import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import catImg from '../public/assets/images/cat.jpg';
import Link from 'next/link';

const catApi = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={catImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">CAT API</h2>
					<h3>React JS / MaterializeCSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This app was built using React JS and is hosted on Github pages. It
						is an Application where you can fetch data from Cat API, You can
						view and search where the cat is from originally and see all the
						important feature about that cat. Upon clicking the Name of the cat
						you can view cat image and more details about your favorite cat.
					</p>
					<a
						href="https://github.com/benk1/CatAPI"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://benk1.github.io/CatAPI/"
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
								<RiRadioButtonFill className="pr-1" /> Cat API
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

export default catApi;
