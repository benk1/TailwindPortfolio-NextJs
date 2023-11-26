import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
// import { useRouter } from 'next/router';
// import NavLogo from '../public/assets/images/BERNARDKAKENGI.png';
import NavLogo from '../public/assets/images/bernardkakengi.png';

import moon from '../public/assets/images/moon.png';
import { useRouter } from 'next/router';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#ecf0f3');
	const [linkColor, setLinkColor] = useState('#1f2937');
	const [position, setPosition] = useState('fixed');
	const [darkToggle, setDarkToggle] = React.useState(false);

	const router = useRouter();

	const handleDarkModeToggle = () => {
		setDarkToggle(!darkToggle);
	};

	useEffect(() => {
		if (
			router.asPath === '/property' ||
			router.asPath === '/crypto' ||
			router.asPath === '/netflix' ||
			router.asPath === '/twitch'
		) {
			setNavBg('transparent');
			setLinkColor('#ecf0f3');
		} else {
			setNavBg('#ecf0f3');
			setLinkColor('#1f2937');
		}
	}, [router]);

	const handleNav = () => {
		setNav(!nav);
	};

	useEffect(() => {
		document.body.setAttribute('data-theme', darkToggle ? 'dark' : 'light');
		const handleShadow = () => {
			if (window.scrollY >= 90) {
				setShadow(true);
			} else {
				setShadow(false);
			}
		};
		window.addEventListener('scroll', handleShadow);
	}, [darkToggle]);

	return (
		<div
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? `fixed w-full h-15 shadow-xl z-[100] ease-in-out duration-300 ${
							darkToggle && 'dark:bg-slate-900'
					  } `
					: `fixed w-full h-15 z-[100] dark:bg-slate-900 ${
							darkToggle && 'dark:bg-slate-900'
					  }`
			}
		>
			<div className="flex items-center justify-between w-full h-full px-2 text-lg 2xl:px-16">
				<Link href="/">
					<a>
						<Image
							src={NavLogo}
							alt="/"
							width="100"
							height="100"
							className="cursor-pointer"
						/>
					</a>
				</Link>
				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="items-center hidden gap-3 md:flex"
					>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/">Home</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/#about">About</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/#skills">Skills</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/#projects">Projects</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/resume">Resume</Link>
						</li>
						<li className="ml-10 text-sm uppercase hover:border-b hover:text-gray-800">
							<Link href="/#contact">Contact</Link>
						</li>
						<li className="ml-10 text-sm">
							<input
								onChange={handleDarkModeToggle}
								type="checkbox"
								value={darkToggle}
								className="toggle"
								checked={darkToggle}
							/>
						</li>
						{/* <Image
							onClick={() => setDarkToggle(!darkToggle)}
							src={moon}
							alt="/"
							width={25}
							height={25}
							className="hidden w-5 cursor-pointer md:block"
						/> */}
					</ul>
					{/* Hamburger Icon */}
					<div
						style={{ color: `${linkColor}` }}
						onClick={handleNav}
						className="md:hidden"
					>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{/* Overlay */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				{/* Side Drawer Menu */}
				<div
					className={
						nav
							? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className="flex items-center justify-between w-full">
							<Link href="/">
								<a>
									<Image src={NavLogo} width="87" height="35" alt="/" />
								</a>
							</Link>
							<div
								onClick={handleNav}
								className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className="my-4 border-b border-gray-300">
							<p className="w-[85%] md:w-[90%] py-4">
								Let&#39;s build something legendary together
							</p>
						</div>
					</div>
					<div className="flex flex-col py-4">
						<ul className="uppercase">
							<Link href="/">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Home
								</li>
							</Link>
							<Link href="/#about">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									About
								</li>
							</Link>
							<Link href="/#skills">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Skills
								</li>
							</Link>
							<Link href="/#projects">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Projects
								</li>
							</Link>
							<Link href="/resume">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Resume
								</li>
							</Link>
							<Link href="/#contact">
								<li onClick={() => setNav(false)} className="py-4 text-sm">
									Contact
								</li>
							</Link>
						</ul>
						<div className="pt-40">
							<p className="uppercase tracking-widest text-[#5651e5]">
								Let&#39;s Connect
							</p>
							<div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
								<a
									href="https://www.linkedin.com/in/clint-briley-50056920a/"
									target="_blank"
									rel="noreferrer"
								>
									<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
										<FaLinkedinIn />
									</div>
								</a>
								<a
									href="https://github.com/fireclint"
									target="_blank"
									rel="noreferrer"
								>
									<div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
										<FaGithub />
									</div>
								</a>
								<Link href="/#contact">
									<div
										onClick={() => setNav(!nav)}
										className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
									>
										<AiOutlineMail />
									</div>
								</Link>
								<Link href="/resume">
									<div
										onClick={() => setNav(!nav)}
										className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105"
									>
										<BsFillPersonLinesFill />
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
