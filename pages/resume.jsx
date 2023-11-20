import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

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
							Leadership skills <span className="px-1">|</span> Web Development{' '}
							<span className="px-1">|</span> Problem Solving
						</p>
					</div>
					<div className="block sm:hidden">
						<p>Proven Leadership</p>
						<p className="py-2">Web Development</p>
						<p> Problem Solving</p>
					</div>
				</div>
				<p>
					I am a Software Engineer currently specializing in Web development.
					Momentarily my strength is front-end development with React and Redux
					and other front-end technologies.I have participated in multiple
					projects during my past experience where teamwork and individuality
					were both crucial.I am hard working,quick to learn with a positive
					attitude under pressure. I have worked with different tools from my
					past experience and been able to adopt quickly. I have developed good
					communication skills and adaptability to different working
					environments. .
				</p>
				<br />
				{/* <p>
					Analytical, innovative,hard working and motivated web development
					professional with experience in customer service, team leadership, and
					organizational effectiveness in fast-paced and challenging
					environments. Adapt at developing strategies and driving streamlined
					operations. Diverse analytical skills, team collaboration, and
					relationship building. Consummate professional, and motivated leader,
					with solid interpersonal abilities and complex problem-solving skills.
					Effective and proven track record of critical thinking, idea
					generation, and optimizing efficiencies.
				</p> */}

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
							given deadlines Valmet oy - worked on paper Machine reference
							Database project(PM-ref DB)
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
							Implement comprehensive mobile responsive UI layouts with
							understanding of front-end technologies e.g HTML, CSS, and
							JavaScript, React - Coach App
						</li>
						<li>
							Working with multiple clients to meet their requirements under
							given deadlines
						</li>
						<li>
							Worked directly with a diverse client base to understand and
							implement multiple technologies and programs.(Minduu(AtCare Oy))
						</li>
						<li>Internal projects within BearIt (Oskari Project)</li>

						{/* <div className="py-6">
								<p className="italic">
									<span className="italic font-bold">BEARIT OY</span>
									<span className="px-2">|</span>Finland, Helsinki
								</p>
								<p className="py-1 italic">
									Front End Web Developer (2022 - Current)
								</p>
								<ul className="py-1 leading-relaxed list-disc list-outside px-7">
									<li>
										Implement comprehensive mobile responsive UI layouts with
										understanding of front-end technologies e.g HTML, CSS, and
										JavaScript.
									</li>
									<li>
										Working with multiple clients to meet their requirements
										under given deadlines
									</li>
									<li>
										Worked directly with a diverse client base to understand and
										implement multiple technologies and programs.(Minduu(AtCare
										Oy) - Implement from scratch their front-end website for
										searching therapists across Finland)
									</li>
									<li>Internal projects within BearIt (Oskari Project)</li>
								</ul>
							</div> */}
						{/* </li> */}
						{/* <li>Internal projects within BearIt (Oskari Project)</li> */}
					</ul>
				</div>

				{/* Personal Experience */}
				{/* <div className="py-6">
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
				</div> */}

				{/*  */}
				{/* <h5 className="text-center underline text-[18px] py-4">
					Other Professional Experience
				</h5> */}

				{/* Experience */}
				{/* <div className="py-6">
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
				</div> */}

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
							As a junior developer, my focus is JavaScript, React/Redux, Node
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
						{/* <p className="py-1 italic">
							General Assistant (June 2011 - June 2013))
						</p> */}
						<ul className="py-1 leading-relaxed list-disc list-outside px-7">
							<li>English - Fluent</li>
							<li>Finnish - Advanced</li>
							<li>Swahili - Native</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default resume;
