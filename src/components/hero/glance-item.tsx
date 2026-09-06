import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "lucide-react";

interface GlanceItemProps {
	number: string;
	label: string;
	href: string;
}

export const GlanceItem = ({ number, label, href }: GlanceItemProps) => {
	return (
		<Link
			to={href}
			className="group block p-4 transition-colors duration-300 ease-in-out"
		>
			<div className="flex items-start gap-1 overflow-hidden font-medium font-pixel text-2xl">
				<span className="font-medium text-foreground text-xl">{number}</span>
				<ArrowUpRightIcon className="mt-1 size-2.5 text-muted-foreground transition-all duration-500 ease-out group-hover:size-3 group-hover:translate-x-px group-hover:-translate-y-0.5 group-hover:text-foreground" />
			</div>
			<div className="mt-2 font-medium font-mono text-muted-foreground text-xs uppercase transition-colors duration-300 ease-in-out group-hover:text-foreground">
				{label}
			</div>
		</Link>
	);
};
