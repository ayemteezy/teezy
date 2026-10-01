import StackIcon from "tech-stack-icons";

import { Marquee } from "@/components/ui/marquee";
import { STACK } from "@/constants/stack";
import { useTheme } from "@/providers/theme-provider";

export const TechStackMarquee = () => {
	const { theme } = useTheme();

	return (
		<div className="space-y-4 pt-24">
			<Marquee className="[&:hover>div]:paused">
				{STACK[0].items.map((item) => (
					<TechItem key={item.name} item={item} theme={theme} />
				))}
			</Marquee>

			<Marquee reverse className="[&:hover>div]:paused">
				{STACK[1].items.map((item) => (
					<TechItem key={item.name} item={item} theme={theme} />
				))}
			</Marquee>

			<Marquee className="[&:hover>div]:paused">
				{STACK[2].items.map((item) => (
					<TechItem key={item.name} item={item} theme={theme} />
				))}
			</Marquee>
		</div>
	);
};

const TechItem = ({
	item,
	theme,
}: {
	item: (typeof STACK)[number]["items"][number];
	theme: string;
}) => {
	return (
		<div className="flex cursor-default items-center gap-2 rounded-sm border border-t-foreground/35 bg-accent/50 px-2 py-1 transition-colors duration-200 hover:bg-accent">
			<StackIcon
				name={item.name}
				variant={theme === "dark" ? "dark" : "light"}
				className="size-4"
			/>
			<p className="font-mono">{item.label}</p>
		</div>
	);
};
