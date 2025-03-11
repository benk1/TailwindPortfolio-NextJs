import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../public/assets/images/profile_pic.jpg';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto  p-2 flex justify-center items-center">
				<div className="mt-44 sm:mt-0">
					<p className="text-sm tracking-widest text-gray-600 uppercase">
						lets build something together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#5651e5]">Bernard</span>
					</h1>
					<div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
						<Image
							src={profilePic}
							className="object-cover w-40 h-40 rounded-full sm:h-full sm:w-36 "
							width={300}
							height={300}
							alt="/"
						/>
					</div>

					<h1 className="py-8 text-gray-700">A web developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{' '}
						I’m focused on building responsive front-end and modern web
						applications
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
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
