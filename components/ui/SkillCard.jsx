import Image from 'next/image';

const SkillCard = ({ name, icon, alt }) => {
	return (
		<li className="p-6 duration-300 ease-in rounded-xl hover:scale-105">
			<div className="grid items-center justify-center grid-cols-2 gap-4">
				<div className="m-auto">
					<Image src={icon} width={64} height={64} alt={alt} />
				</div>

				<div className="flex flex-col items-center justify-center">
					<h3 className="text-base font-bold">{name}</h3>
				</div>
			</div>
		</li>
	);
};

export default SkillCard;
