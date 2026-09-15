import { EXPERIENCE } from "@/constants/experience";
import { CompanyGroup } from "./experience-group";

export const Experience = () => {
	return (
		<div className="relative">
			{EXPERIENCE.map((company, index) => (
				<CompanyGroup
					key={company.company}
					company={company}
					isLast={index === EXPERIENCE.length - 1}
				/>
			))}
		</div>
	);
};
