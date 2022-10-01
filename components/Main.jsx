import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
	return (
		<div id="home" className="w-full h-screen text-center">
			<div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
				<div>
					<p className="text-sm tracking-widest text-gray-600 uppercase">
						lets build something together
					</p>
					<h1 className="py-4 text-gray-700">
						Hi, I'm <span className="text-[#5651e5]">Bern</span>
					</h1>
					<h1 className="text-gray-700 ">A web developer</h1>
					<p className="py-4 text-gray-600 max-w-[70%] m-auto">
						{' '}
						I’m focused on building responsive front-end and modern web
						applications
					</p>
					<div className="flex items-center justify-between max-w-[330px] m-auto py-4">
						<a
							href="https://www.linkedin.com/in/clint-briley-50056920a/"
							target="_blank"
							rel="noreferrer"
						>
							<div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110">
								<FaLinkedinIn />
							</div>
						</a>
						<a
							href="https://github.com/fireclint"
							target="_blank"
							rel="noreferrer"
						>
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
