import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { TechStackMarquee } from "./tech-stack-marquee";

export const TechStackCard = () => {
	return (
		<Card className="group relative col-span-7 border bg-transparent p-0 ring-0 md:col-span-1 lg:col-span-4">
			{/* fade in bottom right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-50 -bottom-50 z-15 size-100 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 dark:bg-white/3"
			/>
			<CardHeader className="pointer-events-none absolute top-4 z-10 w-full text-center">
				<p className="font-mono text-muted-foreground text-xs uppercase transition-colors duration-500 ease-in group-hover:text-blue-400">
					tech stack
				</p>
				<CardTitle className="text-foreground/85 text-lg">
					The technologies behind what I build
				</CardTitle>
			</CardHeader>
			<TechStackMarquee />
		</Card>
	);
};
