import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/images/property.jpg';
import cryptoImg from '../public/assets/images/crypto.jpg';
import netflixImg from '../public/assets/images/netflix.jpg';
import twitchImg from '../public/assets/images/twitch.jpg';
import ProjectItem from './ProjectItem';

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
						title="Property Finder"
						backgroundImg={propertyImg}
						projectUrl="/property"
						tech="React JS"
					/>
					<ProjectItem
						title="Crypto App"
						backgroundImg={cryptoImg}
						projectUrl="/crypto"
						tech="React JS"
					/>
					<ProjectItem
						title="Netflix App"
						backgroundImg={netflixImg}
						projectUrl="/netflix"
						tech="React JS"
					/>
					<ProjectItem
						title="Twitch UI"
						backgroundImg={twitchImg}
						projectUrl="/twitch"
						tech="Next JS"
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
