import { Badge } from "@/components/ui/badge";
import { formatDateRange, getExperienceDuration } from "@/lib/formatDate";
import type { Role } from "@/types/experience";

interface RoleItemProps {
	role: Role;
	hasMultipleRoles: boolean;
	isLast: boolean;
}

export const RoleItem = ({ role, hasMultipleRoles, isLast }: RoleItemProps) => {
	return (
		<div
			className={["relative mt-6", hasMultipleRoles ? "pl-6" : ""].join(" ")}
		>
			{hasMultipleRoles && (
				<>
					{/* Role rail */}
					{!isLast && (
						<span
							aria-hidden="true"
							className="absolute top-2 -bottom-8 left-1.5 w-px bg-border"
						/>
					)}

					{/* Role marker */}
					<span
						aria-hidden="true"
						className="absolute top-1.5 left-0.5 size-2 rounded-full border border-border bg-background"
					/>
				</>
			)}

			<h3 className="font-medium font-sans text-[0.9375rem] tracking-tight">
				{role.role}
			</h3>
			{/* Date */}
			<span className="mt-1.5 block text-muted-foreground text-xs">
				{formatDateRange(role.date)} <span aria-hidden="true">·</span>{" "}
				{getExperienceDuration(role.date)}
			</span>
			{/* Type + arrangement */}
			<span className="mt-0.5 block font-medium text-muted-foreground/60 text-xs capitalize">
				{role.type} <span aria-hidden="true">·</span> {role.arrangement}
			</span>
			<p className="mt-4 max-w-2xl font-sans text-muted-foreground text-sm leading-6">
				{role.summary}
			</p>
			<div className="mt-3 flex flex-wrap gap-1.5">
				{role.skills.slice(0, 3).map((item) => (
					<Badge
						key={item}
						variant="outline"
						className="cursor-pointer rounded-md px-2.5 py-3 font-normal text-[0.6875rem] text-muted-foreground transition-colors duration-200 ease-in-out hover:bg-muted"
					>
						{item}
					</Badge>
				))}

				{role.skills.length > 3 && (
					<Badge
						variant="outline"
						className="cursor-pointer rounded-md border-dashed px-2.5 py-3 font-normal text-[0.6875rem] text-muted-foreground/60 transition-colors duration-200 ease-in-out hover:bg-muted"
					>
						+{role.skills.length - 3} more
					</Badge>
				)}
			</div>
		</div>
	);
};
