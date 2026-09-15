import type { Company } from "@/types/experience";
import { CompanyHeader } from "./company-header";
import { RoleItem } from "./role-item";
import { Timeline } from "./timeline";
import { Year } from "./year";

interface ExperienceGroupProps {
	company: Company;
	isLast: boolean;
}

export const CompanyGroup = ({ company, isLast }: ExperienceGroupProps) => {
	return (
		<section className="relative grid grid-cols-[25px_1fr] gap-x-4 md:grid-cols-[100px_32px_minmax(0,1fr)] md:gap-x-5">
			<Year company={company} />

			<Timeline company={company} isLast={isLast} />

			<div className="col-start-2 pb-12 md:col-start-3">
				<CompanyHeader company={company} />

				<div className="mt-4 space-y-8">
					{company.roles.map((role, index) => (
						<RoleItem
							key={`${company.company}-${role.role}-${role.date.start}`}
							role={role}
							isLast={index === company.roles.length - 1}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
