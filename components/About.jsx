import Image from 'next/image';
import AboutImg from '../public/assets/images/about.jpg';

const About = () => {
	return (
		<section
			id="about"
			className="w-full section-offset"
			aria-labelledby="about-heading"
		>
			<div className="max-w-[1240px] mx-auto px-4  ">
				<div className="grid items-start gap-10 md:grid-cols-3">
					{/* Text column */}
					<div className="md:col-span-2">
						<p className="text-sm font-bold tracking-widest text-blue-700 uppercase">
							About
						</p>

						<h2 id="about-heading" className="py-4">
							Who I Am
						</h2>

						<p className="py-2 leading-relaxed ">
							I’m a web developer based in Helsinki, with a passion for building
							responsive, accessible and visually appealing applications using
							modern technologies like React, Next.js, JavaScript, HTML,CSS,
							NodeJs and Python Flask. My journey into web development began in
							2017, and since then, I’ve worked across multiple industries and
							platforms—from CMS websites to full-stack applications integrated
							with APIs and backend services.
						</p>

						<p className="py-2 leading-relaxed ">
							After graduating with a Bachelor of Engineering in Information
							Technology from Metropolia University of Applied Sciences in
							Finland, I kicked off my career with hands-on experience in Ruby
							and Ruby on Rails as a trainee at Sibesonke Ltd in Espoo. Since
							then, I’ve collaborated with companies like{' '}
							<strong>Integrify Oy</strong>, <strong>BearIT Oy</strong>,{' '}
							<strong>Valmet Oy</strong>, <strong>AtCare Oy(Minduu.fi)</strong>{' '}
							and most recently, <strong>twoday Oy</strong>, contributing to a
							range of impactful projects as a consultant and developer.
						</p>

						<h3 className="py-4 text-xl font-bold">What I Do Best</h3>

						<ul className="py-2 pl-5 space-y-2 leading-relaxed list-disc">
							<li>
								Building clean, accessible, easy-to-use interfaces that make the
								user experience smooth.
							</li>
							<li>
								Collaborating with teams to deliver elegant, scalable solutions.
							</li>
							<li>Writing maintainable, tested, and well-structured code.</li>
							<li>Staying curious and learning new tools when needed.</li>
						</ul>

						<p className="py-2 leading-relaxed ">
							I’ve also explored backend technologies and databases like MySQL
							and MongoDB, and I regularly use Git for version control. Tools
							like VS Code, IntelliJ, and Figma are part of my daily workflow.
						</p>

						<h3 className="py-4 text-xl font-bold">My Work Style</h3>

						<p className="py-2 leading-relaxed ">
							I work well with others and adapt quickly to new teams and tools.
							I believe that good communication, a growth mindset, and a
							positive attitude under pressure are just as important as
							technical skills. Whether working remotely or onsite, I bring
							reliability and a desire to grow.
						</p>

						<h3 className="py-4 text-xl font-bold">Beyond the Code</h3>

						<p className="py-2 leading-relaxed ">
							Outside tech, I’m passionate about languages and cultures. I speak
							fluent English, have developed strong proficiency in Finnish, and
							enjoy connecting with people from different backgrounds. To
							recharge, I stay active playing football, lifting at the gym, or
							going out for a run.
						</p>

						<h3 className="py-4 text-xl font-bold">
							Let’s Build Something Great
						</h3>

						<p className="py-2 leading-relaxed ">
							I’m currently open to new opportunities in web development. If
							you’re looking for a developer who’s passionate about both clean
							code and great design, feel free to reach out directly.
						</p>
					</div>

					{/* Image column (shows on desktop too) */}
					<div className="w-full ">
						<div className="w-full h-auto p-4 duration-300 ease-in rounded-xl hover:scale-105">
							<Image
								src={AboutImg}
								className="rounded-xl"
								alt="About section illustration"
								priority={false}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
