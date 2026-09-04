import { GLANCE } from "@/constants/glance";
import { cn } from "@/lib/utils";
import { GlanceItem } from "./glance-item";

export const Glance = () => {
	return (
		<div
			className={cn(
				"mt-4 grid grid-cols-2 border-t sm:grid-cols-4",
				"*:border-r *:border-b",
				"[&>*:nth-child(2n)]:border-r-0",
				"[&>*:nth-child(n+3)]:border-b-0",
				"sm:*:border-b-0",
				"sm:[&>*:nth-child(2n)]:border-r",
				"sm:[&>*:nth-child(4n)]:border-r-0",
			)}
		>
			{GLANCE.map((item) => (
				<GlanceItem
					key={item.label}
					number={item.number}
					label={item.label}
					href={item.href}
				/>
			))}
		</div>
	);
};
