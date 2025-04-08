import React from 'react';
import Image from 'next/image';
import AboutImg from '../public/assets/images/about.jpg';
const About = () => {
	return (
		<div id="about" className="flex items-center w-full p-2 px-4 ">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2 mt-8 md:mt-24">
					<p className="font-bold tracking-widest text-blue-700 uppercase text6xl ">
						About
					</p>
					<h2 className="py-4">Who I Am:</h2>
					<p className="py-2 text-gray-600">
						I’m a passionate Front-End Developer based in Helsinki. I specialize
						in building intuitive, responsive, and visually engaging
						applications using React, Next.js, JavaScript, HTML, and CSS. My
						journey into web development began in 2017, and since then, I’ve
						worked across multiple industries and platforms from CMS sites on
						WordPress and Shopify to full-stack applications connected to APIs
						and backend services. After graduating with a Bachelor of
						Engineering in Information Technology from Metropolia University of
						Applied Sciences, I kicked off my career with hands-on experience in
						Ruby and Ruby on Rails as a trainee at Sibesonke Ltd in Espoo. Since
						then, I’ve collaborated with companies like Integrify Oy, BearIT Oy,
						and most recently, twoday Oy, contributing as a consultant on
						various impactful projects.
					</p>
					<h2 className="py-4">What I Do Best:</h2>
					<p className="py-2 text-gray-600">
						<li>Crafting clean, accessible, and user-first interfaces</li>
						<li>
							Collaborating with teams to deliver elegant, scalable solutions
						</li>
						<li>Writing maintainable, tested, and well-structured code</li>
						<li>Always staying curious and learning new tools when needed</li>
						<br />
						I’ve also explored backend technologies and databases like MySQL,
						MongoDB, and I regularly use Git for version control. Tools like VS
						Code, IntelliJ, and Figma are part of my daily workflow.
					</p>

					<h2 className="py-4"> My Work Style:</h2>

					<p className="py-2 text-gray-600">
						I thrive in collaborative environments and easily adapt to different
						teams and tech stacks. I believe that good communication, a growth
						mindset, and a positive attitude under pressure are just as
						important as technical skills. Whether working remotely or onsite, I
						bring high energy, reliability, and a desire to grow always.
					</p>

					<h2 className="py-4"> Beyond the Code:</h2>

					<p className="py-2 text-gray-600">
						Outside tech, I’m passionate about languages and cultures. I speak
						fluent English, have developed strong proficiency in Finnish, and
						enjoy connecting with people from diverse backgrounds. To recharge,
						I stay active: whether it’s playing football, lifting at the gym, or
						enjoying long summer jogs through the parks — I make time for
						wellness and balance.
					</p>

					<h2 className="py-4"> Let’s Build Something Great:</h2>

					<p className="py-2 text-gray-600">
						I’m currently open to new opportunities in front-end development. If
						you’re looking for a developer who’s passionate about both clean
						code and great design, feel free to reach out directly.
					</p>
				</div>
				<div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105 md:hidden">
					<Image src={AboutImg} className="rounded-xl " alt="/" />
				</div>
			</div>
		</div>
	);
};

export default About;
