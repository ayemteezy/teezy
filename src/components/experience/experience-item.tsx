import type { Role } from "@/constants/experience";
import { formatDate } from "@/lib/formatDate";

type ExperienceItemProps = {
	company: string;
	roles: Role[];
};

const _formatRoleDateRange = (date: Role["date"]) => {
	if (!date.end) return `${formatDate(date.start)} – Present`;

	const sameYear = date.start.slice(0, 4) === date.end.slice(0, 4);
	const start = sameYear
		? formatDate(date.start).replace(date.start.slice(0, 4), "").trim()
		: formatDate(date.start);

	return `${start} – ${formatDate(date.end)}`;
};

export const ExperienceItem = ({ company, roles }: ExperienceItemProps) => {
	return (
		<>
			{roles.map((role) => {
				return (
					<div
						key={role.role}
						className="flex cursor-pointer items-center justify-between py-2.5 hover:bg-accent"
					>
						<div className="flex flex-col">
							<p className="font-sans font-semibold text-xs sm:text-sm">
								{role.role}
							</p>
							<span className="text-[0.625rem] text-muted-foreground sm:text-xs">
								{company}
							</span>
						</div>
						<p className="text-[0.625rem] text-muted-foreground">
							{_formatRoleDateRange(role.date)}
						</p>
					</div>
				);
			})}
		</>
	);
};
