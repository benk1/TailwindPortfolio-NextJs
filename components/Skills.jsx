import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/images/html.png';
import Css from '../public/assets/images/css.png';
import Javascript from '../public/assets/images/javascript.png';
import ReactImg from '../public/assets/images/react.png';
import Tailwind from '../public/assets/images/tailwind.png';
import Github from '../public/assets/images/github1.png';
import Firebase from '../public/assets/images/firebase.png';
import NextJS from '../public/assets/images/nextjs.png';
import TypeScript from '../public/assets/images/typescript.png';
import AWS from '../public/assets/images/aws.png';
import mongo from '../public/assets/images/mongoDB.png';
import netlify from '../public/assets/images/netlify-logo.png';
import redux from '../public/assets/images/redux.png';
import bitbucket from '../public/assets/images/bitbucket.png';
//Note in first din lg:h-screen or md:h-screen
const Skills = () => {
	return (
		<div id="skills" className="w-full p-2 lg:h-screen">
			<div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Skills
				</p>
				<h2 className="py-4">What I Can Do</h2>
				<div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Html} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>HTML</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Css} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>CSS</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Javascript} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>JavaScript</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={ReactImg} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>React</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Tailwind} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Tailwind</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Firebase} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Firebase</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={Github} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Github</h3>
							</div>
						</div>
					</div>
					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={NextJS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>NextJs</h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={TypeScript} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>TypeScript</h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={AWS} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Amazon Web Service </h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={mongo} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>MongoDB</h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={netlify} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Netlify</h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={redux} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Redux</h3>
							</div>
						</div>
					</div>

					<div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
						<div className="grid items-center justify-center grid-cols-2 gap-4">
							<div className="m-auto">
								<Image src={bitbucket} width="64px" height="64px" alt="/" />
							</div>
							<div className="flex flex-col items-center justify-center">
								<h3>Bitbucket</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
