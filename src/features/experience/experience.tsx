import { EXPERIENCE } from "@/constants/experience";
import { ExperienceItem } from "./experience-item";

export const Experience = () => {
	return (
		<div>
			<div className="space-y-12">
				{EXPERIENCE.map((company, index) => (
					<ExperienceItem
						key={company.company}
						company={company}
						isLast={index === EXPERIENCE.length - 1}
					/>
				))}
			</div>
		</div>
	);
};
