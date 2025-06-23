import Head from 'next/head';
import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const resume = () => {
	const router = useRouter();
	useEffect(() => {
		const scrollToTop = () => {
			requestAnimationFrame(() => {
				window.scrollTo({ top: 0, behavior: 'instant' });
			});
		};

		scrollToTop();
	}, []);
	return (
		<>
			<Head>
				<title>Ben | Resume</title>
				<meta
					name="description"
					content="I’m a front-end web developer specializing in Web development."
				/>
				<link rel="icon" href="/fav.png" />
			</Head>

			<div className="max-w-[940px] mx-auto p-2 pt-[50px] md:pt-[120px] px-4 ">
				<h2 className="font-bold text-blue-700 ">Curriculum vitae - CV</h2>
				<div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
					<h2 className="text-center">Bernard Kakengi</h2>
					<div className="flex">
						<a
							href="https://www.linkedin.com/in/bernard-k-ba2003173/"
							target="_blank"
							rel="noreferrer"
						>
							<FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
						</a>
						{/* <a href="https://github.com/benk1" target="_blank" rel="noreferrer">
							<FaGithub size={20} style={{ marginRight: '1rem' }} />
						</a> */}
					</div>
				</div>
				<div className="py-4 text-xl font-bold tracking-wider uppercase">
					<div className="hidden sm:block">
						<p>
							Web Development <span className="px-1">|</span> Problem Solving{' '}
							<span className="px-1">|</span>Leadership skills
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Proven Leadership</p>
						<p className="py-2">Web Development</p>
						<p> Problem Solving</p>
					</div>
				</div>
				<p>
					I am a Software Engineer specializing in Web development, with a
					strong focus on front-end technologies like React,NextJs and Redux and
					other modern front-end technologies. Recently, I worked on an
					AI-driven web platform (twoday AI Agent), developing an interactive
					user experience that gained over 100 clients across Finland. <br />I
					have participated in multiple projects during my past experience where
					teamwork and individuality were both crucial. I am hard working, quick
					to learn with a positive attitude under pressure. I have worked with
					different tools from my past experience and been able to adopt
					quickly. I have developed good communication skills and adaptability
					to different working environments.
				</p>
				<br />

				{/* Skills */}
				<div className="py-4 text-center">
					<h5 className="text-center underline text-[18px] py-2">Skills</h5>
					<p className="py-2">
						<span className="font-bold">Technical Skills</span>
						<span className="px-2">|</span>Front-End Web Developer
						<span className="px-2">|</span> HTML
						<span className="px-2">|</span>CSS
						<span className="px-2">|</span>Javascript
						<span className="px-2">|</span> TypeScript
						<span className="px-2">|</span>React
						<span className="px-2">|</span>TanStack Query
						<span className="px-2">|</span>NextJS
						<span className="px-2">|</span>MongoDB
						<span className="px-2">|</span>NoSQL
						<span className="px-2">|</span> Git
						<span className="px-2">|</span>Redux, Redux Toolkit & ContextAPI
						<span className="px-2">|</span>
						Tailwind,Material-UI,MaterializeCSS,Flexbox
						<span className="px-2">|</span> Firebase
						<span className="px-2">|</span> Liferay 7.4
						<span className="px-2">|</span> Regular Expressions
						<span className="px-2">|</span> RESTAPI
						<span className="px-2">|</span> Express
						<span className="px-2">|</span> NodeJs
					</p>
					<p className="py-2">
						<span className="font-bold">Amazon Web Services</span>
						<span className="px-2">|</span>AWS Cognito
					</p>
				</div>

				<h5 className="text-center underline text-[18px] py-4">
					Professional Experience
				</h5>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">twoday Oy</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Web Developer (August 2022 - March 2025)
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Working with multiple clients to meet their requirements under
							given deadlines <br />
							<li>
								<b>twoday AI Agent</b> - Developed twoday AI-driven web platform
								with interactive chat solutions focusing on seamless user
								interactions and efficient data management. Built responsive
								user interfaces that act as a company's personal
								superintelligence, leveraging GPT language models to enhance
								data processing, automation, and business operations.
							</li>
							{/* <li>
								<b>Valmet oy</b> - worked on paper Machine reference Database
								project(PM-ref DB){''}
								The PM Reference DB project aimed to develop a tool for
								referencing and organizing time series data of paper machines.
								It facilitates the creation of hierarchical structures that
								depict the operation and logical layout of paper machines,
								linking measurement parameters to specific components. <br />
							</li> */}
							<li>
								<b>Valmet Oy</b> - <b>Full-Stack Developer</b> – Valmet PMref DB
								Project - Worked on the PM Reference DB project, a full-stack
								web solution for managing and visualizing paper machine
								hierarchies and sensor data. Developed and maintained two
								React-based web clients: A hierarchy tool for building machine
								structures,  A visualization tool integrating Tableau dashboards
								On the backend, contributed to Python Flask-based AWS Lambda
								functions, handling data operations and integrations with
								DynamoDB and Snowflake. Built and deployed serverless
								infrastructure using the Serverless Framework, with API Gateway,
								S3, Cognito, and CloudFormation. Used CI/CD pipelines in Jenkins
								for automated deployments across dev, test, and prod
								environments.
							</li>
						</li>

						<li>
							<b> Kotoutumisen-Tukena</b> - Built and customized a Liferay
							7.4-based integration support platform using React, FreeMarker,
							and Liferay CMS. Ensured alignment with Figma designs and
							accessibility standards.
						</li>
					</ul>
				</div>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">BEARIT Oy</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Front End Web Developer (January 2022 August 2022 )
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Working with multiple clients to meet their requirements under
							given deadlines
						</li>
						<li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.
						</li>
						<li>
							<b>Coach App -</b> Developed a performance-tracking application
							enabling coaches to monitor player progress, set goals, and assess
							capabilities based on game and training data. Designed and
							implemented an intuitive user interface for seamless navigation
							and usability. I collaborated with professional coaches to gather
							insights and translate their needs into functional application
							features. Worked closely with the cloud-based backend team to
							ensure smooth data integration and real-time performance tracking.
						</li>
						<li>
							<b>Minduu(AtCare Oy)</b> - Contributed to the development of
							Minduu.fi, a Finnish psychotherapy search service, building the
							platform from scratch. Implemented advanced search algorithms to
							enhance user experience by improving search speed and result
							accuracy. Developed the website with a strong emphasis on
							responsive design and accessibility, ensuring a seamless
							experience across devices. Collaborated closely with Minduu’s
							in-house developers to align technical implementation with
							business needs.
						</li>
						<Link href="https://www.epressi.com/tiedotteet/ohjelmistoteollisuus/yhteiskunnallinen-yrittajyys-yhdisti-minduun-ja-bearitn.html">
							<span className="text-blue-600 underline cursor-pointer hover:text-blue-800">
								A word from minduu CEO
							</span>
						</Link>
						<br />
						<li>
							<b>Oskari Project</b> - Contributed to the development of Oskari,
							a survey system designed for industry clients as part of BearIT’s
							internal project. I Assisted in building user-friendly interfaces
							to enhance the survey experience and improve data collection
							efficiency. Worked closely with the development team to implement
							responsive design and industry-specific features for better
							usability.
						</li>
					</ul>
				</div>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">Integrify Oy</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Web Developer (August 2018 - August 2019)
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Member of Integrify, state-of-the-art software developer program,
							learning and working on modern software development.
						</li>
						<li>
							As a junior developer, my focus was JavaScript, React/Redux, Node
							and Express.
						</li>
						<li>
							Supervision led by senior software developers every day, resulting
							in up to 1000 hours of coding.
						</li>
					</ul>
				</div>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">Sibesonke Ltd</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Junior Developer (August June 2014 - August 2016 )
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Developed a back-end tracing tool using Ruby on Rails, improving
							system efficiency.
						</li>
						<li>
							Worked with Active Record ORM to manipulate databases efficiently.
						</li>
						<li>Performed database management and optimization using MySQL.</li>
						<li>
							Utilized Git for version control and collaborative development.
						</li>
						<li>
							Strong proficiency in Regular Expressions for data parsing and
							validation.
						</li>

						<li>Good working knowledge of Linux (Ubuntu).</li>
					</ul>

					<div className="py-6">
						<p className="italic">
							<span className="italic font-bold">
								SASK(Suomen Ammattiliitojen Solidarikeskus)
							</span>
							<span className="px-2">|</span>Finland, Helsinki
						</p>
						<p className="py-1 italic">
							General Assistant (June 2011 - June 2013))
						</p>
						<ul className="py-1 leading-relaxed list-disc list-outside px-7">
							<li>
								Working as an IT assistant in different events to recruit new
								members in the union.
							</li>
						</ul>
					</div>

					<div className="py-6">
						<p className="italic">
							<span className="italic font-bold">Languages</span>
							{/* <span className="px-2">|</span>Finland, Helsinki */}
						</p>

						<ul className="py-1 leading-relaxed list-disc list-outside px-7">
							<li>English - Fluent</li>
							<li>Finnish - Advanced</li>
							<li>Swahili - Native</li>
						</ul>
					</div>

					<div className="py-6">
						<p className="italic">
							<span className="italic font-bold">Education</span>
						</p>

						<ul className="py-1 leading-relaxed list-disc list-outside px-7">
							<li>
								B.Engineering. Information Technology - Metropolia AMK, 2006
								-2012
							</li>
							<li>Makongo High School - Dar es Salaam,Tanzana, 1998 - 2000</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default resume;
