import { useNavigate } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "lucide-react";
import type { Glance } from "@/constants/glance";

interface GlanceItemProps {
	data: Glance;
}

export const GlanceItem = ({ data }: GlanceItemProps) => {
	const navigate = useNavigate();

	const handleClick = () => {
		if (data.type === "navigate") {
			navigate({ to: data.href });
		} else {
			data.run();
		}
	};

	return (
		<button
			type="button"
			onClick={handleClick}
			className="group block w-full cursor-pointer bg-transparent p-4 text-left transition-colors duration-300 ease-in-out"
		>
			<div className="flex items-start gap-1 overflow-hidden font-medium font-pixel text-2xl">
				<span className="font-medium text-foreground text-xl leading-none">
					{data.number}
				</span>
				<ArrowUpRightIcon className="mt-1 size-2.5 text-muted-foreground/75 transition-all duration-300 ease-out group-hover:size-3 group-hover:translate-x-px group-hover:-translate-y-0.5 group-hover:text-foreground" />
			</div>
			<div className="mt-2 font-medium font-mono text-muted-foreground text-xs uppercase transition-colors duration-300 ease-in-out group-hover:text-foreground">
				{data.label}
			</div>
		</button>
	);
};
