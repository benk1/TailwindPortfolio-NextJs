import { RiRadioButtonFill } from 'react-icons/ri';
import Image from 'next/image';
import financeImage from '../public/assets/images/financeWithCalculator.jpg';
import Link from 'next/link';
const finances = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={financeImage}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Finance Management App</h2>
					<h3>React JS / MaterializeCSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This is a full stack application, it is implemented by ReactJS and
						Context API to manage the state in the front-end. At the back-end we
						take advantage of firebase functions, firebase Database and firebase
						Authentication. In this app you are able to manage your finances by
						keep track of what you are consuming.You need to sign-in or register
						to see your current transaction and be able to add or delete any
						current transaction.
					</p>
					<a
						href="https://github.com/benk1/FinanceApp"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://myfinances-22381.web.app"
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
								<RiRadioButtonFill className="pr-1" /> ContextAPI
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

export default finances;
