import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../public/assets/images/profile_pic.jpg';

const Main = () => {
	return (
		<div id="home" className="w-full min-h-screen text-center md:pt-20">
			<div className="flex flex-col items-center justify-center w-full max-w-screen-lg px-4 pt-10 pb-20 mx-auto text-center">
				<div>
					<p className="mb-4 text-sm tracking-widest text-gray-600 uppercase">
						lets build something together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="font-bold text-blue-700">Bernard</span>
					</h1>
					<div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
						<Image
							src={profilePic}
							className="object-cover rounded-full w-36 h-36 sm:w-40 sm:h-40"
							width={300}
							height={300}
							alt="Profile picture of Ben"
						/>
					</div>

					<h1 className="py-4 text-gray-700">A web developer</h1>
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
							className="relative group"
						>
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<FaLinkedinIn />
							</div>
							<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100">
								LinkedIn
							</span>
						</a>
						{/* <a
							href="https://github.com/benk1"
							target="_blank"
							rel="noreferrer"
							className="relative group"
						>
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<FaGithub />
							</div>
							<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100">
								GitHub
							</span>
						</a> */}
						<Link href="/#contact">
							<a className="relative group">
								<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
									<AiOutlineMail />
								</div>
								<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100">
									Send email
								</span>
							</a>
						</Link>
						<Link href="/resume">
							<a className="relative group">
								<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
									<BsFillPersonLinesFill />
								</div>
								<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100">
									Resume
								</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
