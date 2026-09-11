import { EXPERIENCE } from "@/constants/experience";
import { ExperienceItem } from "./experience-item";

export const ExperienceList = () => {
	return (
		<div className="divide-y border-y">
			{EXPERIENCE.map((item) => (
				<ExperienceItem
					key={item.company}
					company={item.company}
					roles={item.roles}
				/>
			))}
		</div>
	);
};
