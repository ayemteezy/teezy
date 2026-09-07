import type { Role } from "@/constants/experience";
import { formatRoleDateRange } from "@/lib/formatDate";

interface ExperienceItemProps {
	company: string;
	roles: Role[];
}

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
							<p className="font-sans font-semibold text-sm">{role.role}</p>
							<span className="text-muted-foreground text-xs">{company}</span>
						</div>
						<p className="text-[0.625rem] text-muted-foreground">
							{formatRoleDateRange(role.date)}
						</p>
					</div>
				);
			})}
		</>
	);
};
