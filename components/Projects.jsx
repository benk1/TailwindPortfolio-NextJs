import React from 'react';
import financeImg from '../public/assets/images/financeWithCalculator.jpg';
import presentationAppImage from '../public/assets/images/presentation.jpg';
import netflixImg from '../public/assets/images/netflix.jpg';
import catImg from '../public/assets/images/cat.jpg';
import twitchImg from '../public/assets/images/twitch.jpg';
import worldCountries from '../public/assets/images/worldMap.jpg';
import movieImage from '../public/assets/images/movie.jpg';
import memoryImage from '../public/assets/images/memory_v.jpg';

import ProjectItem from './ProjectItem';
import Link from 'next/link';

const Projects = () => {
	return (
		<div id="projects" className="w-full min-h-screen border-4 md:pt-16 ">
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14">
				<p className="text-xl font-bold tracking-widest text-blue-700 uppercase">
					Professional Projects
				</p>
				<h2 className="py-4">Projects I&apos;ve Worked On</h2>
				<div className="flex items-center w-full p-2 py-16 pt-4">
					<ul>
						<li>
							{/* <b>twoday AI Agent</b>- Worked on twoday's Artificial
							Intelligent as a front-end developer. Developed user interfaces
							that serves as your company's personal superintelligence by
							leveraging the power of the GPT language model, it enhances data
							processing efficiency, accelerates business operations, and
							automates both internal and external service processes. */}
							<b>twoday AI Agent</b> - I worked on the development of twoday’s
							AI-powered web platform, where I built interactive and accessible
							chat interfaces and features to improve how users interact with
							the system. My role as a front end developer was purely focused on
							creating responsive user interfaces and integrating GPT-based
							language models to make data handling, automation, and business
							tasks smarter and more efficient. <br />{' '}
							<span className="italic">Front-end technologies used :</span>{' '}
							React 19, Next.js 14, TypeScript, Vite, MUI (Material UI), React
							Query (@tanstack/react-query), REST APIs, GPT (LLM){' '}
							<span className="italic">Backend Technologies used :</span>{' '}
							ASP.NET Core 8, C#, Entity Framework Core, SQL Server, PostgreSQL,
							Azure OpenAI SDK, Microsoft Cognitive Services, JWT
							Authentication, Serilog, Lucene.NET, PuppeteerSharp, MailKit,
							Swagger (Swashbuckle), REST APIs
						</li>
						<br />
						<li>
							{/* <b>Valmet oy</b> - worked on paper Machine reference Database
							project(PM-ref DB)The PM Reference DB project aimed to develop a
							tool for referencing and organizing time series data of paper
							machines. It facilitates the creation of hierarchical structures
							that depict the operation and logical layout of paper machines,
							linking measurement parameters to specific components." */}
							<b>Valmet Oy - Full-Stack Developer</b> – Valmet PMref DB Project
							- Worked on the PM Reference DB project, a full-stack web solution
							for managing and visualizing paper machine hierarchies and sensor
							data. <br />
							<ul className="text-gray-800 list-disc list-inside">
								<li>
									I Developed and maintained two React-based web clients:
									<ul className="ml-6 list-disc list-inside">
										<li>A hierarchy tool for building machine structures</li>
										<li>A visualization tool integrating Tableau dashboards</li>
									</ul>
								</li>
								<li>
									Contribted to the backend by building AWS Lambda functions
									using Python (Flask), responsible for data processing and
									integration with DynamoDB and Snowflake.
								</li>{' '}
								<li>
									Built and deployed serverless infrastructure using the
									Serverless Framework, with services including API Gateway, S3,
									Cognito, and CloudFormation.
								</li>
								<li>
									Used Jenkins CI/CD pipelines for automated deployments across
									development, testing, and production environments.
								</li>
							</ul>{' '}
							<span className="italic">Front end Technologies used :</span>{' '}
							React 16.8, Redux, Redux Thunk, React Redux Form, Styled
							Components, React Date Picker, Tableau API, Amazon Cognito Auth
							JS, Axios, React Toastify, FontAwesome, React Scripts <br />
							<span className="italic ">Back end Technologies used :</span>{' '}
							Python Flask, AWS Lambda, Serverless Framework, API Gateway, S3,
							Cognito, DynamoDB, Snowflake, Elasticsearch, CloudFormation,
							Jenkins CI/CD
						</li>
						<br />
						<li>
							{/* <b>Kotoutumisen-Tukena</b> - Built and customized a Liferay
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
							<span className="italic text-black ">
								{' '}
								Front-end Technologies used :
							</span>{' '}
							React 16, React JSONSchema Form, Semantic UI React, React Union
							(for Liferay integration), PropTypes, React Select, Reaptcha
							(Google reCAPTCHA), Ramda, PostCSS <br />{' '}
							<span className="italic text-black ">
								{' '}
								Backend Technologies used :
							</span>{' '}
							Java, Liferay 7.4 (OSGi-based architecture), Service Builder (for
							persistence), REST APIs (via Liferay REST Builder), Gradle, MySQL,
							JSP/FreeMarker for custom templates, Liferay Role & Permission
							Management
						</li>
						<br />
						<li>
							{/* <b>Coach App</b> - I was involved in developing an application
							where sports coaches can monitor their players' results, set
							goals, and assess capabilities based on game and training
							outcomes. An intuitive user interface was created for the
							application, along with a cloud-based backend. In my role, I also
							consulted with professional coaches to map out their needs. */}
							<b>Coach App</b> - Developed a performance-tracking application
							enabling coaches to monitor player progress, set goals, and assess
							capabilities based on game and training data. I implemented an
							intuitive user interface for easy navigation and usability. I
							collaborated with professional coaches to gather insights and
							translate their needs into functional application features. Worked
							closely with the cloud-based backend(AWS) team to ensure smooth
							data integration and real-time performance tracking.
						</li>
						<br />
						<li>
							{/* <b>Minduu(AtCare Oy)</b> - Development of the Minduu.fi
							psychotherapy service,I was involved in creating a therapy search
							service from scratch. For this search service, several different
							search algorithms were developed to enhance the user experience by
							speeding up searches and delivering more accurate results. The
							service was created in close collaboration with Minduu's own
							developers. The website's implementation focused on responsive
							design principles and accessibility. */}
							<b>Minduu(AtCare Oy)</b> - Contributed to the development of
							Minduu.fi, a Finnish biggest psychotherapy search service,
							building the platform from scratch. Implemented advanced search
							algorithms to enhance user experience by improving search speed
							and result accuracy. Developed the website with a strong emphasis
							on responsive design and accessibility, ensuring a smooth
							experience across devices. I Collaborated closely with Minduu’s
							in-house developers to align technical implementation with
							business needs.
						</li>
						<Link href="https://www.epressi.com/tiedotteet/ohjelmistoteollisuus/yhteiskunnallinen-yrittajyys-yhdisti-minduun-ja-bearitn.html">
							<span className="underline cursor-pointer ">
								A word from minduu CEO
							</span>
						</Link>
						<br />
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
						<br />
						<li>
							{' '}
							<b>Integrify Oy</b> - Completed Integrify's software developer
							program, focusing on JavaScript, React/Redux, Node.js, and
							Express, with 1000+ hours of supervised coding. <br />
							<span className="italic text-black">
								{' '}
								Technologies used:
							</span>{' '}
							React, Redux, Context API, Flex-box, MUI, NodeJs, Express,
							JavaScript, MongoDB, MYSQL, Git, Regular expressions
						</li>
						<li></li>
					</ul>
					{/* <ProjectItem
						title="World Countries"
						backgroundImg={worldCountries}
						projectUrl="/worldCountries"
						tech="React JS"
					/>

					<ProjectItem
						title="Finance Management"
						backgroundImg={financeImg}
						projectUrl="/finances"
						tech="React JS"
					/>
					<ProjectItem
						title="Presentation App"
						backgroundImg={presentationAppImage}
						projectUrl="/presentation"
						tech="MERN Stack"
					/>
					<ProjectItem
						title="Movie Rental App"
						backgroundImg={movieImage}
						projectUrl="/movieRental"
						tech="React JS"
					/>
					<ProjectItem
						title="CAT API "
						backgroundImg={catImg}
						projectUrl="/catApi"
						tech="React JS"
					/>
					<ProjectItem
						title="Memory Game"
						backgroundImg={memoryImage}
						projectUrl="/magicMemory"
						tech="React JS"
					/> */}
				</div>

				<div></div>
			</div>
		</div>
	);
};

export default Projects;
