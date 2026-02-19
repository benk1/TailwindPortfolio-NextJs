import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import NavLogo from '../public/assets/images/bernardkakengi.png';
import { useRouter } from 'next/router';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [shadow, setShadow] = useState(false);
	const [navBg, setNavBg] = useState('#cfd8e3');
	const [linkColor, setLinkColor] = useState('#002DA1');

	const [position, setPosition] = useState('fixed');
	const [darkToggle, setDarkToggle] = React.useState(false);
	const [activeHash, setActiveHash] = useState('');

	const router = useRouter();

	useEffect(() => {
		// Only run scroll-spy on the homepage
		if (router.pathname !== '/') return;

		const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
		const sections = sectionIds
			.map((id) => document.getElementById(id))
			.filter(Boolean);

		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				// Pick the most visible section
				const visible = entries
					.filter((e) => e.isIntersecting)
					.sort(
						(a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
					)[0];

				if (!visible?.target?.id) return;

				setActiveHash(`#${visible.target.id}`);

				window.history.replaceState(null, '', `/#${visible.target.id}`);
			},
			{
				// Adjust for your fixed navbar height
				root: null,
				threshold: [0.2, 0.35, 0.5, 0.65],
				rootMargin: `-${Math.ceil(parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 72)}px 0px -55% 0px`,
			},
		);

		sections.forEach((s) => observer.observe(s));

		// Set initial active section on load
		const initialHash = window.location.hash || '#home';
		setActiveHash(initialHash);

		return () => observer.disconnect();
	}, [router.pathname]);

	useEffect(() => {
		const syncHash = (url) => {
			const hash = url.includes('#') ? `#${url.split('#')[1]}` : '';
			setActiveHash(hash);
		};

		// set correct hash on first load
		syncHash(router.asPath);

		// when Next.js navigation happens
		const handleRouteChange = (url) => syncHash(url);
		router.events.on('routeChangeComplete', handleRouteChange);

		// when user manually changes hash in browser
		const handleHashChange = () => syncHash(window.location.href);
		window.addEventListener('hashchange', handleHashChange);

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			window.removeEventListener('hashchange', handleHashChange);
		};
	}, [router.asPath, router.events]);

	// Keep a ref so we can return focus to the hamburger button when menu closes
	const menuButtonRef = useRef(null);
	const navRef = useRef(null);

	const handleDarkModeToggle = () => {
		setDarkToggle(!darkToggle);
	};

	useEffect(() => {
		const setNavHeightVar = () => {
			if (!navRef.current) return;
			const height = navRef.current.getBoundingClientRect().height;
			document.documentElement.style.setProperty(
				'--nav-height',
				`${Math.ceil(height)}px`,
			);
		};

		setNavHeightVar();
		window.addEventListener('resize', setNavHeightVar);

		return () => window.removeEventListener('resize', setNavHeightVar);
	}, [shadow, darkToggle, nav]);

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
	}, [router.asPath]);

	const handleNav = () => {
		setNav(!nav);
	};

	// Theme effect
	useEffect(() => {
		document.body.setAttribute('data-theme', darkToggle ? 'dark' : 'light');
	}, [darkToggle]);

	//  Close menu on Escape (accessibility)
	useEffect(() => {
		const onKeyDown = (e) => {
			if (e.key === 'Escape' && nav) {
				setNav(false);
				menuButtonRef.current?.focus();
			}
		};

		document.addEventListener('keydown', onKeyDown);
		return () => document.removeEventListener('keydown', onKeyDown);
	}, [nav]);

	//  Prevent background scrolling when the mobile menu is open
	useEffect(() => {
		if (!nav) return;

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = prevOverflow;
		};
	}, [nav]);

	//  Return focus to hamburger when closing mobile menu (keyboard users)
	useEffect(() => {
		if (!nav && menuButtonRef.current) {
			menuButtonRef.current.focus();
		}
	}, [nav]);

	const isHome =
		router.pathname === '/' && (activeHash === '' || activeHash === '#home');
	const isSection = (hash) => router.pathname === '/' && activeHash === hash;
	const isPage = (path) => router.pathname === path;

	const activeClass = 'font-bold text-[#0047AB] underline underline-offset-4';

	return (
		<nav
			ref={navRef}
			aria-label="Primary"
			style={{ backgroundColor: `${navBg}` }}
			className={
				shadow
					? `fixed w-full shadow-xl z-[100] ease-in-out duration-300 ${
							darkToggle && 'dark:bg-slate-900'
						}`
					: `fixed w-full z-[100] dark:bg-slate-900 ${
							darkToggle && 'dark:bg-slate-900'
						}`
			}
		>
			<a
				href="#main"
				className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200]
				           focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded focus:shadow"
			>
				Skip to content
			</a>

			<div className="flex items-center justify-between w-full px-2 text-lg 2xl:px-16">
				<Link href="/" legacyBehavior>
					<a aria-label="Go to home">
						<div className="relative w-[100px] h-[70px] hidden md:block">
							<Image
								src={NavLogo}
								alt="Bernard Kakengi logo"
								layout="fill"
								width={100}
								height={100}
								className="cursor-pointer"
								objectFit="contain"
							/>
						</div>
					</a>
				</Link>

				<div>
					<ul
						style={{ color: `${linkColor}` }}
						className="items-center hidden gap-3 md:flex text-[#002DA1]"
					>
						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isHome ? activeClass : ''}`}
						>
							<Link href="/#home" legacyBehavior>
								<a>Home</a>
							</Link>
						</li>

						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isSection('#about') ? activeClass : ''}`}
						>
							<Link href="/#about" legacyBehavior>
								<a>About</a>
							</Link>
						</li>

						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isSection('#skills') ? activeClass : ''}`}
						>
							<Link href="/#skills" legacyBehavior>
								<a>Skills</a>
							</Link>
						</li>

						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isSection('#projects') ? activeClass : ''}`}
						>
							<Link href="/#projects" legacyBehavior>
								<a>Projects</a>
							</Link>
						</li>

						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isPage('/resume') ? activeClass : ''}`}
						>
							<Link href="/resume" legacyBehavior>
								<a>Resume</a>
							</Link>
						</li>

						<li
							className={`ml-10 text-sm uppercase transition duration-200 ease-in-out 
     hover:underline-offset-4 hover:text-[#0047AB]
    ${isSection('#contact') ? activeClass : ''}`}
						>
							<Link href="/#contact" legacyBehavior>
								<a>Contact</a>
							</Link>
						</li>

						<li className="ml-10 text-sm">
							<label htmlFor="dark-mode-toggle" className="sr-only">
								Toggle dark mode
							</label>
							<input
								id="dark-mode-toggle"
								onChange={handleDarkModeToggle}
								type="checkbox"
								value={darkToggle}
								className="toggle"
								checked={darkToggle}
								aria-label="Toggle dark mode"
							/>
						</li>
					</ul>

					{/* Hamburger Button (mobile) */}
					<button
						ref={menuButtonRef}
						type="button"
						aria-label={nav ? 'Close menu' : 'Open menu'}
						aria-expanded={nav}
						aria-controls="mobile-menu"
						onClick={handleNav}
						style={{ color: `${linkColor}`, backgroundColor: 'transparent' }}
						className="md:hidden inline-flex items-center justify-center p-2 bg-transparent appearance-none
						            focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400] rounded nav-icon-btn"
					>
						<AiOutlineMenu size={25} />
					</button>
				</div>
			</div>

			{/* Overlay as a button so clicking outside closes the menu */}
			{nav && (
				<button
					type="button"
					className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[90]"
					aria-label="Close menu overlay"
					onClick={() => setNav(false)}
				/>
			)}

			{/* Mobile Side Drawer Menu */}
			<div
				id="mobile-menu"
				className={
					nav
						? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-[100]'
						: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
				}
			>
				<div>
					<div className="flex items-center justify-between w-full">
						<div></div>

						<Link href="/#home" legacyBehavior>
							<a className="hidden md:block" aria-label="Go to home">
								<Image src={NavLogo} width="87" height="35" alt="Logo" />
							</a>
						</Link>

						<button
							type="button"
							onClick={() => setNav(false)}
							aria-label="Close menu"
							className="p-3 ml-auto rounded-full shadow-lg cursor-pointer shadow-gray-400
                           bg-transparent inline-flex items-center justify-center
                           focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
						>
							<AiOutlineClose />
						</button>
					</div>

					<div className="my-4 border-b border-gray-300">
						<p className="w-[85%] md:w-[90%] py-4">
							Let&#39;s build something legendary together
						</p>
					</div>
				</div>

				<div className="flex flex-col py-4">
					<ul className="uppercase">
						<li className="py-4 text-sm">
							<Link href="/#home" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									Home
								</a>
							</Link>
						</li>

						<li className="py-4 text-sm">
							<Link href="/#about" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									About
								</a>
							</Link>
						</li>

						<li className="py-4 text-sm">
							<Link href="/#skills" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									Skills
								</a>
							</Link>
						</li>

						<li className="py-4 text-sm">
							<Link href="/#projects" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									Projects
								</a>
							</Link>
						</li>

						<li className="py-4 text-sm">
							<Link href="/resume" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									Resume
								</a>
							</Link>
						</li>

						<li className="py-4 text-sm">
							<Link href="/#contact" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									className="block rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									Contact
								</a>
							</Link>
						</li>
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
								aria-label="LinkedIn"
								className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105
                             inline-flex items-center justify-center
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
							>
								<FaLinkedinIn />
							</a>

							<Link href="/#contact" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									aria-label="Email / Contact"
									className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105
                             inline-flex items-center justify-center
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									<AiOutlineMail />
								</a>
							</Link>

							<Link href="/resume" legacyBehavior>
								<a
									onClick={() => setNav(false)}
									aria-label="Resume"
									className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105
                             inline-flex items-center justify-center
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E07400]"
								>
									<BsFillPersonLinesFill />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
