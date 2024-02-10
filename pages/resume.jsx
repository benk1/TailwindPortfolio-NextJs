import Head from 'next/head';
import React from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

const resume = () => {
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

			<div className="max-w-[940px] mx-auto p-2 pt-[120px]">
				<h2 className="text-center">Curriculum vitae - CV</h2>
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
						<a href="https://github.com/benk1" target="_blank" rel="noreferrer">
							<FaGithub size={20} style={{ marginRight: '1rem' }} />
						</a>
					</div>
				</div>
				<div className="py-4 text-xl font-bold tracking-wider text-center uppercase">
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
					I am a Passionate Software Engineer specializing in Web development.
					My expertise lies in front-end development, particularly with
					React/NextJs and Redux and other front-end technologies, where I excel
					in creating dynamic and intuitive interfaces. I have contributed to
					numerous projects where my front-end skills were instrumental in
					delivering exceptional user experiences.From implementing responsive
					layouts to implementing complex state management. I thrive in tackling
					challenging tasks head-on."I am hard working,quick to learn with a
					positive attitude under pressure. I have worked with different tools
					from my past experience and been able to adopt quickly. In addition to
					my technical prowess, I pride myself on my strong communication skills
					and ability to collaborate effectively with cross-functional teams.
					Whether working independently or in a collaborative setting, I
					approach every challenge with a positive attitude and a
					solution-oriented mindset."I have developed good communication skills
					and adaptability to different working environments. I'm passionate
					about leveraging technology to create meaningful solutions, and I'm
					always eager to collaborate on exciting projects. Let's connect and
					bring your ideas to life!"
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
					<p className="py-1 italic">Web Developer (2023 - Current)</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.
						</li>
						<li>
							Working with multiple clients to meet their requirements under
							given deadlines <br />
							<b>Valmet oy</b> - worked on paper Machine reference Database
							project(PM-ref DB){''}
							The PM Reference DB project aimed to develop a tool for
							referencing and organizing time series data of paper machines. It
							facilitates the creation of hierarchical structures that depict
							the operation and logical layout of paper machines, linking
							measurement parameters to specific components." <br />
							<b>twoday AI Works unit</b> - Worked on twoday's Artificial
							Intelligent as a front-end developer. developed user interfaces
							that serves as your company's personal superintelligence by
							leveraging the power of the GPT language model, it enhances data
							processing efficiency, accelerates business operations, and
							automates both internal and external service processes.
						</li>
					</ul>
				</div>

				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">BEARIT Oy</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">Front End Web Developer (2022 )</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Working with multiple clients to meet their requirements under
							given deadlines
						</li>
						<li>
							Implement comprehensive mobile responsive UI layouts with
							understanding of front-end technologies e.g HTML, CSS,Material UI,
							JavaScript and React <br />
							<b>Coach App -</b> I was involved in developing an application
							where coaches can monitor their players' results, set goals, and
							assess capabilities based on game and training outcomes. An
							intuitive user interface was created for the application, along
							with a cloud-based backend. In my role, I also consulted with
							professional coaches to map out their needs.
						</li>
						<b>Minduu(AtCare Oy)</b> - Development of the Minduu.fi
						psychotherapy service,I was involved in creating a therapy search
						service from scratch. For this search service, several different
						search algorithms were developed to enhance the user experience by
						speeding up searches and delivering more accurate results. The
						service was created in close collaboration with Minduu's own
						developers. The website's implementation focused on responsive
						design principles and accessibility.
						<br />
						<Link href="https://www.epressi.com/tiedotteet/ohjelmistoteollisuus/yhteiskunnallinen-yrittajyys-yhdisti-minduun-ja-bearitn.html">
							<span className="underline cursor-pointer ">
								A word from minduu CEO
							</span>
						</Link>
						<br />
						<b>Oskari Project</b> - Patly participated in bearIt internal
						project for developing a survey system for industry
						customers(Oscari)
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
							Designed the back-end development tracing tool using Ruby and Ruby
							on Rails.
						</li>
						<li>
							Dealing with Ruby on Rails active records to manipulate the
							database.
						</li>
						<li>Database manipulation using MySQL.</li>
						<li>Excellent knowledge of Using Git (Version Control System).</li>
						<li>Excellent with Regular expressions.</li>

						<li>
							Good working knowledge of Linux (Ubuntu), MS Access, Excel and
							Word/LibreOffice and development of web pages and design.
						</li>
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
