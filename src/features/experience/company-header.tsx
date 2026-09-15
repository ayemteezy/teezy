import type { Company } from "@/types/experience";

interface CompanyHeaderProps {
	company: Company;
}

export const CompanyHeader = ({ company }: CompanyHeaderProps) => {
	return (
		<div className="flex items-start gap-4">
			<div
				aria-hidden="true"
				className="flex size-11 shrink-0 items-center justify-center rounded-lg border bg-muted/30 font-pixel text-[0.6875rem]"
			>
				{company.abbreviation}
			</div>

			<div className="min-w-0">
				<h2 className="font-sans font-semibold text-base leading-5">
					{company.company}
				</h2>

				<div className="mt-0.5 flex items-center gap-1.5 text-muted-foreground">
					<span className="font-mono text-xs">{company.location}</span>
				</div>
			</div>
		</div>
	);
};
