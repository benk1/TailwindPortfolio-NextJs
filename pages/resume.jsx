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
				<h2 className="font-bold text-blue-700 ">Curriculum Vitae - CV</h2>
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
					I am a Software Engineer focused in web development with strong
					background in modern front-end technologies. Recently, I worked on an
					AI-powered web platform (<b>twoday's AI Agent</b> solution -{' '}
					<b>AI Agent</b>) at twoday Oy, developing Interactive features that
					contributed to gaining over 100 clients during my time there. I have
					participated in multiple projects as a consultant including projects
					for a large Finnish publicly listed companies as both full stack and
					front end developer. I am a quick learner who adapts easily to new
					tools and technologies. I am known for staying positive under pressure
					and always maintain a positive attitude. My experience has helped me
					develop strong communication skills and the ability to work in
					different environments. I enjoy creating user-friendly and innovative
					applications while continuously improving my skills.
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
						Web Developer (August 2022 - March 2025) <br /> Working with
						multiple clients to meet their requirements under given deadlines{' '}
						<br />
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							{/* Working with multiple clients to meet their requirements under
							given deadlines <br /> */}
							<li>
								<b>twoday AI Agent</b> - Developed twoday AI-driven web platform
								with interactive chat solutions focusing on seamless user
								interactions and efficient data management. Built responsive
								user interfaces that act as a company's personal
								superintelligence, leveraging GPT language models to enhance
								data processing, automation, and business operations. <br />
								<span className="italic text-black">
									Front-end technologies used :
								</span>{' '}
								React 19, Next.js 14, TypeScript, Vite, MUI (Material UI), React
								Query (@tanstack/react-query), REST APIs, GPT (LLM) <br />
								<span className="italic text-black">
									Backend Technologies used :
								</span>{' '}
								ASP.NET Core 8, C#, Entity Framework Core, SQL Server,
								PostgreSQL, Azure OpenAI SDK, Microsoft Cognitive Services, JWT
								Authentication, Serilog, Lucene.NET, PuppeteerSharp, MailKit,
								Swagger (Swashbuckle), REST APIs
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
								{/* <b>Valmet Oy</b> - <b>Full-Stack Developer</b> – Valmet PMref DB
								Project - Worked on the PM Reference DB project, a full-stack
								web solution for managing and visualizing paper machine
								hierarchies and sensor data. Developed and maintained two
								React-based web clients: A hierarchy tool for building machine
								structures, A visualization tool integrating Tableau dashboards
								On the backend, contributed to Python Flask-based AWS Lambda
								functions, handling data operations and integrations with
								DynamoDB and Snowflake. Built and deployed serverless
								infrastructure using the Serverless Framework, with API Gateway,
								S3, Cognito, and CloudFormation. Used CI/CD pipelines in Jenkins
								for automated deployments across dev, test, and prod
								environments. */}
								<b>Valmet Oy - Full-Stack Developer</b> – Valmet PMref DB
								Project - Worked on the PM Reference DB project, a full-stack
								web solution for managing and visualizing paper machine
								hierarchies and sensor data. <br />
								<ul className="text-gray-800 list-disc list-inside">
									{/* <li>
									I Developed and maintained two React-based web clients:
									<ul className="ml-6 list-disc list-inside">
										<li>A hierarchy tool for building machine structures</li>
										<li>A visualization tool integrating Tableau dashboards</li>
									</ul>
								</li> */}
									<li>
										Contribted to the backend by building AWS Lambda functions
										using Python (Flask), responsible for data processing and
										integration with DynamoDB and Snowflake.
									</li>{' '}
									<li>
										Built and deployed serverless infrastructure using the
										Serverless Framework, with services including API Gateway,
										S3, Cognito, and CloudFormation.
									</li>
									<li>
										Used Jenkins CI/CD pipelines for automated deployments
										across development, testing, and production environments.
									</li>
								</ul>{' '}
								<span className="italic text-black">
									Front end Technologies used :
								</span>{' '}
								React 16.8, Redux, Redux Thunk, React Redux Form, Styled
								Components, React Date Picker, Tableau API, Amazon Cognito Auth
								JS, Axios, React Toastify, FontAwesome, React Scripts <br />
								<span className="italic text-black ">
									Back end Technologies used :
								</span>{' '}
								Python Flask, AWS Lambda, Serverless Framework, API Gateway, S3,
								Cognito, DynamoDB, Snowflake, Elasticsearch, CloudFormation,
								Jenkins CI/CD
							</li>
						</li>

						<li>
							{/* <b> Kotoutumisen-Tukena</b> - Built and customized a Liferay
							7.4-based integration support platform using React, FreeMarker,
							and Liferay CMS. Ensured alignment with Figma designs and
							accessibility standards. */}
							<b>Kotoutumisen-Tukena</b> - I worked on improving and customizing
							a Liferay 7.4-based platform aimed at supporting immigrant
							integration in Finland, My focus was on front-end development
							using React, FreeMarker, and Liferay CMS. I ensured the design
							matched Figma specs and followed accessibility standards, making
							the site more user-friendly for everyone.
							<br />{' '}
							<span className="italic text-black">
								{' '}
								Front-end Technologies used :
							</span>{' '}
							React 16, React JSONSchema Form, Semantic UI React, React Union
							(for Liferay integration), PropTypes, React Select, Reaptcha
							(Google reCAPTCHA), Ramda, PostCSS <br />{' '}
							<span className="italic text-black">
								{' '}
								Backend Technologies used :
							</span>
							Java, Liferay 7.4 (OSGi-based architecture), Service Builder (for
							persistence), REST APIs (via Liferay REST Builder), Gradle, MySQL,
							JSP/FreeMarker for custom templates, Liferay Role & Permission
							Management
						</li>
					</ul>
				</div>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">BEARIT Oy</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Front End Web Developer (January 2022 August 2022 ) <br />
						Worked as a consultant directly with a diverse client base to
						understand and implement multiple technologies and programs.
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						{/* <li>
							Working with multiple clients to meet their requirements under
							given deadlines
						</li> */}
						{/* <li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.
						</li> */}
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
