import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/images/about.jpg';
//Note to play with this md:h-screen in first div
const About = () => {
	return (
		<div id="about" className="flex items-center w-full p-2 py-16 pt-24 ">
			<div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
				<div className="col-span-2">
					<p className="pt-8 text-xl font-bold tracking-widest text-blue-700 uppercase sm:pt-0">
						About
					</p>
					<h2 className="py-4">Who I Am</h2>
					<p className="py-2 text-gray-600">
						{/* I am a Web developer, I really enjoy developIng Apps using different
						Technologies, since my graduation at Metropolia University of
						applied science in Finland-Helsinki, I have been lucky enough to be
						involved in multiple IT projects, but this time, I am in a phase of
						my career where I want to be very close to the user and this is why
						I pursue this phase of front-end development, Apart from that I have
						been involved in back-end development to widen up my knowledge of
						web-development.Beyond the web-development I am currently enjoying
						web-designing.I specialize in building mobile responsive front-end
						UI applications that connect with API’s and other backend
						technologies. I’m passionate about learning new technologies and
						understand there is more than one way to accomplish a task. Though I
						am most proficient in building front-end applications using HTML,
						CSS, Javascript, and React, I am a quick learner and can pick up new
						tech stacks as needed. I believe that being a great developer is not
						using one specific language, but choosing the best tool for the job. */}
						I am a Web Developer with a passion for building intuitive and
						engaging applications. Since graduating from Metropolia University
						of Applied Sciences in Helsinki, Finland, I have had the opportunity
						to work on multiple IT projects, gaining hands-on experience in
						front-end development and some exposure to backend technologies.
						Currently, I focus on front-end development, creating responsive and
						user-friendly interfaces that connect seamlessly with APIs and
						backend services. While my primary expertise is in React,NextJs,
						JavaScript, HTML, and CSS, I enjoy learning new technologies and
						adapting to different tools as needed. Beyond development, I have a
						growing interest in web design, ensuring that applications are not
						just functional but also visually appealing and accessible. I
						believe that being a great developer is about choosing the right
						tools for the job and continuously improving my skills.
					</p>
					<p className="py-2 text-gray-600">
						I started web developement in 2017 manage to build multiple websites
						on CMS platforms such as WordPress,Shopify, and e-Commerce
						solutions. I have experience working directly with clients
						transforming mock wireframes into fully deployed applications.
					</p>

					<p className="py-2 text-gray-600">
						I am passionate about creating and improving applications. In my
						Software development career, My journey in software development
						began with Ruby, progressing into Ruby on Rails, where I worked on
						various projects as a trainee at Sibesonke Ltd in Espoo, Finland.
						During my time there, I gained hands-on experience in web
						development, functional and unit testing. I had a great time working
						on different software development methodologies including functional
						and unit testing on the process. Later, I joined Integrify Oy
						located in the heart of Helsinki city, where I expanded my skills
						and solidified myself as a web developer. Following that, I worked
						at BearIT Oy as a consultant, contributing to multiple projects
						across different industries.I then moved to twoday Oy, where I
						continued working as a consultant until March 2025, specializing in
						front-end development and building impactful applications.
						Currently, I am currently seeking a new challenge in front-end
						development, where I can contribute my skills and continue growing
						as a web developer. Feel free to explore more of my previous
						projects, both personal and hobby-based, on my GitHub below.
						<a className="text-gray-600 about" href="https://github.com/benk1/">
							click here
						</a>{' '}
					</p>

					<p className="py-2 text-gray-600">
						I have strong communication skills and adapt easily to different
						working environments.I am highly motivated,hardworking and quick to
						learn, always maintaining a positive attitude under pressure. These
						qualities have shaped who I am today. Currently, I specialize in
						front-end development while expanding my skills as a full-stack
						developer.I am proficient in Git(version control), MySQL, MongoDB,
						and Regular Expressions, with experience using multiple code editors
						such as Visual Studio Code, IntelliJ, and Atom. As a Bachelor of
						Engineering graduate in Information Technology, I have a flexible
						skill set and the ability to adapt to various IT-related roles
						beyond my primary expertise. My experience has taught me to work
						effectively with different tools and quickly adapt to new
						environments.
					</p>

					<p className="py-2 text-gray-600">
						I have experience working in collaborative team environments across
						various projects. . I enjoy working with diverse groups of people
						and continuously seek opportunities to learn and challenge myself.
						Beyond technology, I have a strong interest in foreign languages, as
						they allow me to understand different cultures and communities.
						Having lived in Finland for several years, I have developed
						proficiency in Finnish, and I am fluent in both written and spoken
						English.
					</p>
					<p className="py-2 text-gray-600">
						In my free time, I prioritize staying active and maintaining a
						healthy lifestyle through various sports.Football (soccer) is my
						favorite, and I enjoy playing regularly. A few times a week, I go to
						the gym to stay fit, and during the summer, I love evening jogs and
						long walks in nature, especially around parks.
					</p>
					<Link href="/#projects">
						<p className="py-2 text-gray-600 underline cursor-pointer">
							Check out some former personal projects.
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
