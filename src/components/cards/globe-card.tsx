import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe } from "@/components/ui/globe";
import { ARCS, MARKERS } from "@/constants/markers";

type RGB = [number, number, number];

// Defined outside the component so the array references stay stable.
// The Globe effect depends on them, so inline arrays would rebuild the globe on every render.
const THEMES: Record<
	"light" | "dark",
	{
		dark: number;
		mapBrightness: number;
		baseColor: RGB;
		glowColor: RGB;
		markerColor: RGB;
		arcColor: RGB;
	}
> = {
	light: {
		dark: 0,
		mapBrightness: 10,
		baseColor: [1, 1, 1],
		glowColor: [0.94, 0.93, 0.91],
		markerColor: [0.3, 0.45, 0.85],
		arcColor: [0.3, 0.45, 0.85],
	},
	dark: {
		dark: 1,
		mapBrightness: 6,
		baseColor: [0.3, 0.3, 0.3],
		glowColor: [1, 1, 1],
		markerColor: [0.4, 0.55, 0.95],
		arcColor: [0.4, 0.55, 0.95],
	},
};

function useIsDark() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		const sync = () => setIsDark(root.classList.contains("dark"));
		sync();

		const observer = new MutationObserver(sync);
		observer.observe(root, { attributes: true, attributeFilter: ["class"] });
		return () => observer.disconnect();
	}, []);

	return isDark;
}

export const GlobeCard = () => {
	const isDark = useIsDark();
	const theme = THEMES[isDark ? "dark" : "light"];

	return (
		<Card className="group relative col-span-7 min-h-70 cursor-pointer border bg-transparent p-0 ring-0 md:col-span-1 lg:col-span-3">
			{/* fade in bottom right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-50 -bottom-50 z-15 size-100 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 dark:bg-white/5"
			/>
			<CardHeader className="pointer-events-none absolute top-4 z-10 w-full">
				<p className="font-mono text-muted-foreground text-xs uppercase transition-colors duration-500 ease-in group-hover:text-blue-400">
					Manila • UTC+8
				</p>
				<CardTitle className="text-foreground/85 text-lg">
					Open to remote work.
				</CardTitle>
			</CardHeader>
			<div className="pointer-events-none absolute -bottom-20 md:-bottom-25 lg:pointer-events-auto lg:-bottom-45">
				<Globe
					markers={MARKERS}
					arcs={ARCS}
					{...theme}
					markerSize={0.025}
					markerElevation={0.01}
				/>
			</div>
		</Card>
	);
};
