import type { Company } from "@/types/experience";

import { CompanyHeader } from "./company-header";
import { RoleItem } from "./role-item";
import { YearRail } from "./year-rail";

interface ExperienceItemProps {
	company: Company;
	isLast: boolean;
}

export const ExperienceItem = ({ company, isLast }: ExperienceItemProps) => {
	const firstRole = company.roles[0];

	const year = new Date(`${firstRole.date.start}-01`).getFullYear();

	return (
		<article className="grid w-full grid-cols-[56px_minmax(0,1fr)]">
			<YearRail year={year} isLast={isLast} />

			<div className="min-w-0">
				<CompanyHeader company={company} />

				{company.roles.map((role, index) => (
					<RoleItem
						key={role.date.start}
						role={role}
						hasMultipleRoles={company.roles.length > 1}
						isLast={index === company.roles.length - 1}
					/>
				))}
			</div>
		</article>
	);
};
