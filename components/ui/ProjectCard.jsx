import Link from 'next/link';

const ProjectCard = ({
	title,
	role,
	description,
	highlights,
	frontEnd,
	backEnd,
	links,
}) => {
	return (
		<li
			className="p-6 bg-white rounded-xl transition-transform duration-300 ease-in-out
    hover:scale-[1.02] hover:shadow-2xl
    focus-within:scale-[1.02] focus-within:shadow-2xl"
		>
			<h3 className="text-lg font-bold text-gray-800">{title}</h3>

			{role && <p className="mt-1 text-sm text-gray-600">{role}</p>}

			{description && (
				<p className="mt-4 leading-relaxed text-gray-700">{description}</p>
			)}

			{highlights?.length ? (
				<ul className="mt-4 ml-5 space-y-2 text-gray-700 list-disc">
					{highlights.map((item) => (
						<li key={item}>{item}</li>
					))}
				</ul>
			) : null}

			{frontEnd?.length ? (
				<div className="mt-4">
					<p className="text-sm font-semibold text-gray-800">
						Front-end technologies
					</p>
					<p className="mt-1 text-sm text-gray-700">{frontEnd.join(', ')}</p>
				</div>
			) : null}

			{backEnd?.length ? (
				<div className="mt-3">
					<p className="text-sm font-semibold text-gray-800">
						Back-end technologies
					</p>
					<p className="mt-1 text-sm text-gray-700">{backEnd.join(', ')}</p>
				</div>
			) : null}

			{links?.length ? (
				<div className="mt-4">
					<p className="sr-only">Related links</p>
					<ul className="space-y-2">
						{links.map((l) => (
							<li key={l.href}>
								<a
									href={l.href}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue-700 underline hover:text-blue-800"
								>
									{l.label}
								</a>
							</li>
						))}
					</ul>
				</div>
			) : null}
		</li>
	);
};

export default ProjectCard;
