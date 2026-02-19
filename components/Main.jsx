import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';
import profilePic from '../public/assets/images/profile_pic.jpg';

const Main = () => {
	return (
		<section
			id="home"
			className="w-full min-h-screen text-center section-offset"
			aria-labelledby="home-heading"
		>
			<div
				className="flex flex-col items-center justify-start md:justify-center
          w-full max-w-screen-lg mx-auto text-center px-4
          min-h-[calc(100vh-var(--nav-height))]
          gap-3 sm:gap-6
          pb-8 md:pb-6"
			>
				<p className="mb-4 text-sm tracking-widest text-gray-600 uppercase">
					lets build something together
				</p>

				<h1 id="home-heading" className="py-4 text-gray-700 ">
					Hi, I&apos;m <span className="font-bold text-blue-700">Bernard</span>
				</h1>

				<div className="mx-auto w-full max-w-[520px] p-4 duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
					<div className="flex justify-center">
						<Image
							src={profilePic}
							className="object-cover rounded-full w-36 h-36 sm:w-40 sm:h-40"
							width={300}
							height={300}
							alt="Profile picture of Ben"
							priority
						/>
					</div>
				</div>

				<h2 className="pt-4 text-2xl font-bold text-gray-700 sm:text-3xl md:pt-2">
					A web developer
				</h2>

				<p className="text-gray-600 max-w-[90%] sm:max-w-[70%] text-sm sm:text-base mx-auto">
					I’m focused on building responsive and modern web applications.
				</p>

				<div className="flex items-center justify-center gap-16 md:gap-16 ">
					<a
						href="https://www.linkedin.com/in/bernard-k-ba2003173/"
						target="_blank"
						rel="noreferrer"
						aria-label="Open LinkedIn profile in a new tab"
						className="relative group focus:outline-none"
					>
						<div
							className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110
						                focus-visible:ring-2 focus-visible:ring-[#E07400]"
						>
							<FaLinkedinIn aria-hidden="true" />
						</div>
						<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
							LinkedIn
						</span>
					</a>

					<Link href="/#contact" legacyBehavior>
						<a
							aria-label="Jump to contact section"
							className="relative group focus:outline-none"
						>
							<div
								className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110
							                focus-visible:ring-2 focus-visible:ring-[#E07400]"
							>
								<AiOutlineMail aria-hidden="true" />
							</div>
							<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
								Send email
							</span>
						</a>
					</Link>

					<Link href="/resume" legacyBehavior>
						<a
							aria-label="Open resume page"
							className="relative group focus:outline-none"
						>
							<div
								className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-110
							                focus-visible:ring-2 focus-visible:ring-[#E07400]"
							>
								<BsFillPersonLinesFill aria-hidden="true" />
							</div>
							<span className="absolute px-2 py-1 text-xs text-white transition -translate-x-1/2 bg-black rounded opacity-0 top-20 left-1/2 group-hover:opacity-100 group-focus-within:opacity-100">
								Resume
							</span>
						</a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Main;
