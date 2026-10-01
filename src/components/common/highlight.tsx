import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { Ping } from "@/components/ui/ping";

export const Highlight = () => {
	return (
		<div className="flex w-fit cursor-pointer items-center gap-2 rounded-full border bg-background/40 px-2 py-1 shadow backdrop-blur-md transition-colors">
			<Ping />
			<AnimatedShinyText className="font-mono text-[10px]">
				{/* TODO: Make this dynamic  */}
				Available for work
			</AnimatedShinyText>
		</div>
	);
};
