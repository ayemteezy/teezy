import type { Company } from "@/types/experience";

export const Year = ({ company }: { company: Company }) => {
	const years = [
		...new Set(
			company.roles.map((role) =>
				new Date(`${role.date.start}-01`).getFullYear(),
			),
		),
	];

	return (
		<div className="hidden pt-1.5 md:block">
			{years.map((year) => (
				<span
					key={year}
					className="font-medium font-sans text-foreground text-xs"
				>
					{year}
				</span>
			))}
		</div>
	);
};
