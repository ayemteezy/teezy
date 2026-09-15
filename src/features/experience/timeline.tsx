import type { Company } from "@/types/experience";

interface TimelineProps {
	company: Company;
	isLast: boolean;
}

export const Timeline = ({ company, isLast }: TimelineProps) => {
	const year = new Date(`${company.roles[0].date.start}-01`).getFullYear();

	return (
		<div className="relative mt-1.5">
			{/* Mobile: year above the rail */}
			<span className="relative z-10 block bg-background py-2 font-medium font-sans text-[0.625rem] text-foreground md:hidden">
				{year}
			</span>

			{/* Mobile: rail */}
			{!isLast && (
				<span
					aria-hidden="true"
					className="absolute top-5 -bottom-12 left-1/2 w-px -translate-x-1/2 bg-border md:hidden"
				/>
			)}

			{/* Desktop: dot */}
			<span
				aria-hidden="true"
				className="absolute top-3 left-1/2 z-10 hidden size-1.5 -translate-x-1/2 rounded-full bg-foreground md:block"
			/>

			{/* Desktop: rail */}
			{!isLast && (
				<span
					aria-hidden="true"
					className="absolute top-3 bottom-0 left-1/2 hidden w-px -translate-x-1/2 bg-border md:block"
				/>
			)}
		</div>
	);
};
