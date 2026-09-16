import { getCompanyWorkDuration } from "@/lib/formatDate";
import type { Company } from "@/types/experience";

interface CompanyHeaderProps {
	company: Company;
}

export const CompanyHeader = ({ company }: CompanyHeaderProps) => {
	const totalWorkDate = getCompanyWorkDuration(company);

	return (
		<header>
			<h2 className="font-sans font-semibold text-base tracking-tight">
				{company.company}
			</h2>

			<div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground text-xs">
				{company.location && <span>{company.location}</span>}

				{company.location && totalWorkDate && <span aria-hidden="true">·</span>}

				<span>{totalWorkDate}</span>
			</div>
		</header>
	);
};
