import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
	return (
		<>
			<Head>
				<title>Clint | Resume</title>
				<meta
					name="description"
					content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
				/>
				<link rel="icon" href="/fav.png" />
			</Head>

			<div className="max-w-[940px] mx-auto p-2 pt-[120px]">
				<h2 className="text-center">Resume</h2>
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
							Proven Leadership <span className="px-1">|</span> Web Development{' '}
							<span className="px-1">|</span> Complex Problem Solving
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Proven Leadership</p>
						<p className="py-2">Web Development</p>
						<p>Complex Problem Solving</p>
					</div>
				</div>
				<p>
					Analytical, innovative,hard working and motivated web development professional
					with experience in customer service, team leadership, and
					organizational effectiveness in fast-paced and challenging
					environments. Adapt at developing strategies and driving streamlined
					operations. Diverse analytical skills, team collaboration, and
					relationship building. Consummate professional, and motivated leader,
					with solid interpersonal abilities and complex problem-solving skills.
					Effective and proven track record of critical thinking, idea
					generation, and optimizing efficiencies.
				</p>

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
						<span className="px-2">|</span>Next JS
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
				{/* Experience */}
				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">BEARIT OY</span>
						<span className="px-2">|</span>Finland, Helsinki
					</p>
					<p className="py-1 italic">
						Front End Web Developer (2022 - Current)
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Ensured comprehensive mobile responsive UI layouts with
							understanding of HTML, CSS, and JavaScript.
						</li>
						<li>
							Troubleshoot issues and concerns, configure operation and analytic
							plugins, and design changes as needed.
						</li>
						<li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.
						</li>
						<li>
							Platform migration managing DNS servers as well as MX records and
							ensuring a smooth migration process.
						</li>
					</ul>
				</div>

				{/* Personal Experience */}
				<div className="py-6">
					<p className="italic">
						<span className="italic font-bold">
							Teaching & Mentoring Web Development
						</span>
						<span className="px-2">|</span>Dallas, TX
					</p>
					<p className="py-1 italic">
						Code Commerce - Youtube Channel (2021 - Current)
					</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							In 2021 I started “Code Commerce”, a YouTube channel focused on
							sharing what I’m learning in web development, specifically
							front-end development.
						</li>
						<li>
							Private 1 on 1 Zoom coaching calls related to web development.
							More specifically debugging, teaching basic web development
							concepts and code reviews.
						</li>
					</ul>
				</div>

				{/*  */}
				<h5 className="text-center underline text-[18px] py-4">
					Other Professional Experience
				</h5>

				{/* Experience */}
				<div className="py-6">
					<p className="italic">
						<span className="font-bold">CITY OF SHERMAN, TX</span>
						<span className="px-2">|</span>Sherman, TX
					</p>
					<p className="py-1 italic">Paramedic / Firefighter (2010 – 2019)</p>
					<ul className="py-1 leading-relaxed list-disc list-outside px-7">
						<li>
							Ensured proper implementation of firefighting techniques and
							practices including controlling and extinguishing fires, operating
							hose lines, and fire ground operations, ventilation, and search
							and rescue.
						</li>
						<li>
							Oversaw comprehensive understanding, operation, and maintenance of
							fire engines, ladder trucks, technical rescue apparatus, and
							response trailers.
						</li>
						<li>
							Performed ALS techniques as needed within emergency situations
							including the use of an esophageal or dual lumen airway device and
							oral intubation using laryngoscopy.
						</li>
						<li>
							Collaborated with a talented and high performing team of
							firefighters in high pressure and stressful situations as needed.
						</li>
						<li>
							Utilized proven and demonstrated knowledge of multiple
							certifications including Pediatric Advanced Life Support,
							Prehospital Trauma Life Support, and Advanced Cardiac Life
							Support, among others.
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default resume;
