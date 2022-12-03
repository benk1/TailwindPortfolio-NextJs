import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import memoryImage from '../public/assets/images/memory_v.jpg';
const magicMemory = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={memoryImage}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Magic Memory Game</h2>
					<h3>React JS / MaterializeCSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This is designed and implemented using Modern React features. You
						need to flip two cards to get the matched cards, if you don't get
						the matched cards keep on trying till you get two cards matched, you
						will win after getting all the pair cards matched. Below the game it
						will show you how many turns you have to win the game.
					</p>
					<a
						href="https://github.com/benk1/Magic-Memory"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://hardcore-panini-866022.netlify.app/"
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
								<RiRadioButtonFill className="pr-1" /> Netlify
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Firebase
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

export default magicMemory;
