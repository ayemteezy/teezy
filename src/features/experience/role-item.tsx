import { Badge } from "@/components/ui/badge";
import { formatDateRange, getExperienceDuration } from "@/lib/formatDate";
import type { Role } from "@/types/experience";

interface RoleItemProps {
	role: Role;
	isLast: boolean;
}

export const RoleItem = ({ role, isLast }: RoleItemProps) => {
	return (
		<article className="relative pl-15">
			{/* Role rail */}
			{!isLast && (
				<>
					<div
						aria-hidden="true"
						className="absolute top-2.5 -bottom-10.5 left-6 w-px bg-border"
					/>

					{/* Role marker */}
					<span
						aria-hidden="true"
						className="absolute top-1.5 left-5 size-2 rounded-full border border-border bg-background"
					/>
				</>
			)}

			<div className="space-y-2">
				<div className="flex flex-wrap items-center gap-x-2 gap-y-1">
					<h3 className="font-medium font-sans text-[15px]">{role.role}</h3>

					<span className="rounded-full border px-2 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">
						{role.type}
					</span>

					{role.arrangement && (
						<span className="rounded-full border px-2 py-0.5 font-mono text-[0.5625rem] text-muted-foreground">
							{role.arrangement}
						</span>
					)}
				</div>

				<p className="font-semibold text-[0.625rem] text-muted-foreground/60 uppercase">
					{formatDateRange(role.date)} · {getExperienceDuration(role.date)}
				</p>

				<p className="max-w-2xl font-sans text-[0.8125rem] text-muted-foreground leading-relaxed">
					{role.summary}
				</p>

				<div className="flex flex-wrap gap-1.5">
					{role.skills.map((skill) => (
						<Badge
							key={skill}
							variant="outline"
							className="rounded-sm p-3 text-[10px] text-muted-foreground"
						>
							{skill}
						</Badge>
					))}
				</div>
			</div>
		</article>
	);
};
