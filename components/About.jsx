import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/images/about.jpg';

const About = () => {
	return (
		<div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="uppercase text-xl tracking-widest text-[#5651e5]">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						I am a Web developer, I really enjoy developIng Apps using different
						Technologies, since my graduation at Metropolia University of
						applied science in Finland-Helsinki, I have been lucky enough to be
						involved in multiple IT projects, but this time, I am in a phase of
						my career where I want to be very close to the user and this is 
						why I pursue this phase of front-end development, Apart from that I
						have been involved in back-end development to widen up my knowledge
						of web-development.Beyond the web-development I am currently
						enjoying web-designing.I specialize in building mobile responsive
						front-end UI applications that connect with API’s and other backend
						technologies. I’m passionate about learning new technologies and
						understand there is more than one way to accomplish a task. Though I
						am most proficient in building front-end applications using HTML,
						CSS, Javascript, and React, I am a quick learner and can pick up new
						tech stacks as needed. I believe that being a great developer is not
						using one specific language, but choosing the best tool for the job.
					</p>
					<p className="py-2 text-gray-600">
						I started web developement in 2017 manage to build multiple websites
						on CMS platforms such as WordPress, e-Commerce, and Shopify. I have
						experience working directly with clients and taking mock wireframes
						all the way to deployed applications.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some of my latest projects.
						</p>
					</Link>
				</div>
				<div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
					<Image src={AboutImg} className="rounded-xl" alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
