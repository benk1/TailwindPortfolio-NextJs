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
		// <div id="projects" className="w-full md:pt-8">
		<div
			id="projects"
			className="w-full md:pt-16 "
		>
			{/* <div className="max-w-[1240px] mx-auto px-2 py-16"> */}
			<div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-10 sm:py-14 md:py-16">
				<p className="text-xl font-bold tracking-widest text-blue-700 uppercase">
					Professional Projects
				</p>
				<h2 className="py-4">Projects I&apos;ve Worked On</h2>
				<div className="flex items-center w-full p-2 py-16 pt-4">
					<ul>
						<li>
							<b>twoday AI Works unit </b>- Worked on twoday's Artificial
							Intelligent as a front-end developer. developed user interfaces
							that serves as your company's personal superintelligence by
							leveraging the power of the GPT language model, it enhances data
							processing efficiency, accelerates business operations, and
							automates both internal and external service processes.
						</li>
						<br />
						<li>
							<b>Valmet oy</b> - worked on paper Machine reference Database
							project(PM-ref DB)The PM Reference DB project aimed to develop a
							tool for referencing and organizing time series data of paper
							machines. It facilitates the creation of hierarchical structures
							that depict the operation and logical layout of paper machines,
							linking measurement parameters to specific components."
						</li>
						<br />
						<li>
							<b>Kotoutumisen-Tukena</b> - Built and customized a Liferay
							7.4-based integration support platform using React, FreeMarker,
							and Liferay CMS. Ensured alignment with Figma designs and
							accessibility standards.
						</li>
						<br />
						<li>
							<b>Coach App</b> - I was involved in developing an application
							where sports coaches can monitor their players' results, set
							goals, and assess capabilities based on game and training
							outcomes. An intuitive user interface was created for the
							application, along with a cloud-based backend. In my role, I also
							consulted with professional coaches to map out their needs.
						</li>
						<br />
						<li>
							<b>Minduu(AtCare Oy)</b> - Development of the Minduu.fi
							psychotherapy service,I was involved in creating a therapy search
							service from scratch. For this search service, several different
							search algorithms were developed to enhance the user experience by
							speeding up searches and delivering more accurate results. The
							service was created in close collaboration with Minduu's own
							developers. The website's implementation focused on responsive
							design principles and accessibility.
						</li>
						<br />
						<Link href="https://www.epressi.com/tiedotteet/ohjelmistoteollisuus/yhteiskunnallinen-yrittajyys-yhdisti-minduun-ja-bearitn.html">
							<span className="underline cursor-pointer ">
								A word from minduu CEO
							</span>
						</Link>
						<li>
							<b>Oskari Project</b> - Patly participated in bearIt internal
							project for developing a survey system for industry
							customers(Oscari)
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
