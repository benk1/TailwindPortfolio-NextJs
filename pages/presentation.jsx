import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import presentationAppImage from '../public/assets/images/presentation.jpg';
const presentation = () => {
	return (
		<div className="w-full">
			<div className="w-screen h-[50vh] relative">
				<div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1"
					layout="fill"
					objectFit="cover"
					src={presentationAppImage}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Presentation App</h2>
					<h3>React JS / MaterializeCSS </h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This is MERN(Mongodb,Express,ReactJS and NodeJS) full stack
						Application, user can Manage presenters by adding,editing and
						deleting presenters from the database and navigate through different
						pages using react-router-dom.Please register to signIn or LogIn so
						you can have more privilege of viewing and operating more CRUD
						features.Be patient as It can take few seconds for the data to load
						from the server to the UI as the site is hosted in Heroku.
					</p>
					<a
						href="https://github.com/benk1/presentationsApp"
						target="_blank"
						rel="noreferrer"
					>
						<button className="px-8 py-2 mt-4 mr-8">Code</button>
					</a>
					<a
						href="https://presentationapp-client.herokuapp.com/presenters"
						target="_blank"
						rel="noreferrer"
					>
						<button disabled className="px-8 py-2 mt-4">
							Demo Temporarily Unavailable
						</button>
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
								<RiRadioButtonFill className="pr-1" /> MongoDB
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Javascript
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> NodeJs
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Express
							</p>
							<p className="flex items-center py-2 text-gray-600">
								<RiRadioButtonFill className="pr-1" /> Bootstrap
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

export default presentation;
