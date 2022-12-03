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
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto px-2 py-16">
				<p className="text-xl tracking-widest uppercase text-[#5651e5]">
					Projects
				</p>
				<h2 className="py-4">What I&apos;ve Built</h2>
				<div className="grid gap-8 md:grid-cols-2">
					<ProjectItem
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
					/>
				</div>
				{/* <p className="items-center">
					<a className="about" href="https://github.com/benk1/">
						More Projects On My Github Page
					</a>{' '}
				</p> */}
				<div className="py-12 ">

				<Link href="https://github.com/benk1/">
					<p className="py-2 text-gray-600 underline cursor-pointer">
						More Projects On My Github Page
					</p>
				</Link>
				</div>
			</div>
		</div>
	);
};

export default Projects;
