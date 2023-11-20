import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/images/about.jpg';
//Note to play with this md:h-screen in first div
const About = () => {
	return (
		<div id="about" className="flex items-center w-full p-2 py-16 ">
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
						using one specific language, but choosing the best tool for the job.
					</p>
					<p className="py-2 text-gray-600">
						I started web developement in 2017 manage to build multiple websites
						on CMS platforms such as WordPress, e-Commerce, and Shopify. I have
						experience working directly with clients and taking mock wireframes
						all the way to deployed applications.
					</p>

					<p className="py-2 text-gray-600">
						I am obsessed with making things happen, in matter of fact I am more
						interested on making things better. In my Software development
						career, I started the development based on programming with Ruby
						Language and developed further with Ruby on Rails framework, now
						looking for a role as a front-end developer. I participated in
						different projects as a trainee at Sibesonke Ltd based in Espoo city
						in Finland, where I trained and work as a software developer using
						Ruby and Ruby on Rails, which has really sparked me into web
						development. I had a great time working on different software
						development methodologies including functional and unit testing on
						the process. I was lucky enough to work with another company called
						Integrify Oy located in the heart of Helsinki capital city Of
						Finland, where I built most of my projects and stabilize myself as a
						full web-developer, Currently Iam  working as a web
						developer with twoday Oy based in Helsink, for more about what
						projects I have been building,please click the github link below and
						check it out{' '}
						<a className="about" href="https://github.com/benk1/">
							here
						</a>{' '}
						.
					</p>

					<p className="py-2 text-gray-600">
						I have good communication skills and adaptability to different
						working environments. I am team player,highly driven motivated
						person, hardworking, quick to learn with a positive attitude under
						pressure. This is one of the reason which makes me who I am today.
						At the moment I am specializing in front-end development and learning my path as a full stack developer at twoday
						oy where I am more working with HTML5, CSS, JAVASCRIPT,
						ReactJS/Redux,NodeJs,Express, AWS and many more web-technologies. I
						have good knowledge of using GIT(version control
						system),Mysql,MongoDB databases, good with Regular expressions,
						experienced with multiple editors e.g Visual studio code as one of
						my favourite at the moment, sublime, Atom and many more. As a
						graduate with a bachelor of engineering In Information Technology, I
						am able and flexible to do any IT-related job apart from specialized
						one above. My experience have taught me how to work with different
						tools and be able to adapt to new working environments.{' '}
					</p>

					<p className="py-2 text-gray-600">
						I have team work experience with different projects. I get along
						with different kinds of people and I am eager to learn new things to
						challenge myself. I am also interested in learning foreign
						languages, in this way building my understanding and experience of
						other cultures and communities. Currently I am good in Finnish
						language as i have been living in Finland for some time now, apart
						from that I am fluent in written and spoken English .
					</p>
					<p className="py-2 text-gray-600">
						At my spare time, i like to take care of myself healthywise by doing
						different kind pf sports activities, one of my favorite sport is
						playing football as Americans call it soccer:), couple of days in a
						week I like to go to the gym to maintain my fitness. During summer
						time you will always find me doing some evening jogging and long
						walks around the parks and enjoying the nature as it is beautiful
						out there.
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
