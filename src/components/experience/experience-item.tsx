import type { Role } from "@/constants/experience";
import { formatDate } from "@/lib/formatDate";

type ExperienceItemProps = {
	company: string;
	roles: Role[];
};

export const ExperienceItem = ({ company, roles }: ExperienceItemProps) => {
	return (
		<div>
			{roles.map((role) => (
				<div key={role.role} className="grid grid-cols-3 items-center py-4">
					<div>
						<p className="text-[0.625rem] text-muted-foreground">
							{formatDate(role.date.start)} -{" "}
							{role.date.end ? formatDate(role.date.end) : "Present"}
						</p>
					</div>
					<p className="font-sans font-semibold text-sm">{role.role}</p>
					<p className="text-end text-[0.625rem] text-muted-foreground">
						{company}
					</p>
				</div>
			))}
		</div>
	);
};
