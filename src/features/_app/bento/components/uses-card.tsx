import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { UsesPreview } from "./uses-preview";

export const UsesCard = () => {
	return (
		<Card className="group relative col-span-7 min-h-70 cursor-pointer border bg-transparent p-0 ring-0 md:col-span-2 lg:col-span-3">
			{" "}
			{/* fade in bottom right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-50 -bottom-50 z-15 size-100 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 dark:bg-white/5"
			/>
			<Button
				variant="secondary"
				size="icon"
				className="transform-flat absolute right-4 bottom-4 z-15 translate-y-full rounded-full p-5 opacity-0 shadow-xs transition-all duration-25 ease-out hover:bg-secondary group-hover:translate-y-0 group-hover:opacity-100"
			>
				<ArrowRightIcon className="size-4" />
			</Button>
			<CardHeader className="absolute bottom-4 z-10 w-full text-center">
				<p className="font-mono text-muted-foreground text-xs uppercase transition-colors duration-500 ease-in group-hover:text-blue-400">
					Uses
				</p>
				<CardTitle className="text-foreground/85 text-lg">
					Tools I build with
				</CardTitle>
			</CardHeader>
			<UsesPreview />
		</Card>
	);
};
