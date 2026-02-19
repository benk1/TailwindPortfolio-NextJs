import SkillCard from './ui/SkillCard';
import { skills } from '../data/skills';

const Skills = () => {
	return (
		<section
			id="skills"
			className="w-full section-offset min-h-[calc(100vh-var(--nav-height))] "
			aria-labelledby="skills-heading"
		>
			<div className="max-w-[1240px] mx-auto px-4   ">
				<p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
					Skills
				</p>

				<h2 id="skills-heading" className="py-4">
					What I Can Do
				</h2>

				<ul
					role="list"
					className="grid grid-cols-2 gap-8 md:mt-8 lg:grid-cols-4"
				>
					{skills.map((skill) => (
						<SkillCard
							key={skill.name}
							name={skill.name}
							icon={skill.icon}
							alt={skill.alt}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Skills;
