import { cn } from "@/lib/utils";

interface TelemetryItemProps {
	name: string;
	percent: number;
	index: number;
}

export const TelemetryItem = ({ name, percent, index }: TelemetryItemProps) => {
	return (
		<div
			className={cn(
				"cursor-pointer border-border p-4 transition-colors duration-300 ease-in-out hover:bg-accent",
				index % 2 !== 0 && "max-sm:border-l",
				index >= 2 && "max-sm:border-t",
				index > 0 && "sm:border-l",
				"sm:border-t-0",
			)}
		>
			<span className="font-pixel text-2xl text-foreground">{percent}%</span>

			<div className="mt-1.5 font-mono text-[0.65625rem] text-muted-foreground uppercase">
				{name}
			</div>
		</div>
	);
};
