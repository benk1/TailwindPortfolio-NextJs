import ProjectCard from './ui/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
	return (
		<section
			id="projects"
			className="w-full section-offset  min-h-[calc(100vh-var(--nav-height))]"
			aria-labelledby="projects-heading"
		>
			<div className="max-w-[1240px] mx-auto px-4  ">
				<p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
					Professional Projects
				</p>

				<h2 id="projects-heading" className="py-4">
					Projects I&apos;ve Worked On
				</h2>

				<ul role="list" className="grid gap-8 md:grid-cols-2">
					{projects.map((p) => (
						<ProjectCard key={p.id} {...p} />
					))}
				</ul>
			</div>
		</section>
	);
};

export default Projects;
