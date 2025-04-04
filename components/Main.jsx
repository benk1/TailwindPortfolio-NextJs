import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../public/assets/images/profile_pic.jpg';

const Main = () => {
	return (
		<div id="home" className="w-full min-h-screen text-center md:pt-20">
			{/* <div className="max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center"> */}
			{/* <div className="flex flex-col items-center justify-center w-full max-w-screen-lg min-h-screen px-4 mx-auto text-center"> */}
			<div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4 pt-10 pb-20 mx-auto text-center">
				{/* <div className="mb-64 md:mb-44 md:mt-0"> */}
				{/* <div className="mt-10 md:mt-0 "> */}
				<div>
					{/* <p className="text-sm tracking-widest text-gray-600 uppercase mt-44 md:mt-0"> */}
					{/* <p className="mt-10 text-sm tracking-widest text-gray-600 uppercase md:mt-0"> */}
					<p className="mb-4 text-sm tracking-widest text-gray-600 uppercase">
						lets build something together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="font-bold text-blue-700">Bernard</span>
					</h1>
					<div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
						{/* <Image
							src={profilePic}
							className="object-cover w-40 h-40 rounded-full sm:h-full sm:w-36 "
							width={300}
							height={300}
							alt="/"
						/> */}
						<Image
							src={profilePic}
							className="object-cover rounded-full w-36 h-36 sm:w-40 sm:h-40"
							width={300}
							height={300}
							alt="Profile picture of Ben"
						/>
					</div>

					<h1 className="py-4 text-gray-700">A web developer</h1>
					{/* <p className=" text-gray-600 max-w-[70%] m-auto"> */}
					<p className="text-gray-600 max-w-[90%] sm:max-w-[70%] text-sm sm:text-base mx-auto">
						{' '}
						I’m focused on building responsive front-end and modern web
						applications
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4 ">
						<a
							href="https://www.linkedin.com/in/bernard-k-ba2003173/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<FaLinkedinIn />
							</div>
						</a>
						<a href="https://github.com/benk1" target="_blank" rel="noreferrer">
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<FaGithub />
							</div>
						</a>
						<Link href="/#contact">
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<AiOutlineMail />
							</div>
						</Link>
						<Link href="/resume">
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<BsFillPersonLinesFill />
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
