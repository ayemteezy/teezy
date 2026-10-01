import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import TranslucentBox from "@/components/ui/transluscent-box";
import { FEATURES } from "@/constants/feature";

export const FeatureCard = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setVisible(false);

			setTimeout(() => {
				setActiveIndex((current) => (current + 1) % FEATURES.length);
				setVisible(true);
			}, 500);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const feature = FEATURES[activeIndex];

	return (
		<Card className="group relative col-span-7 min-h-70 cursor-pointer border bg-transparent p-0 ring-0 md:col-span-1 lg:col-span-3">
			{/* fade in bottom right */}
			<div
				aria-hidden
				className="pointer-events-none absolute -right-50 -bottom-50 z-15 size-100 rounded-full bg-blue-400/10 opacity-0 blur-2xl transition-all duration-200 ease-in-out group-hover:opacity-100 dark:bg-white/3"
			/>
			<CardHeader className="absolute top-4 z-10 w-full">
				<p className="font-mono text-muted-foreground text-xs uppercase transition-colors duration-500 ease-in group-hover:text-blue-400">
					what i bring
				</p>
				<CardTitle className="text-foreground/85 text-lg">
					Clean code, thoughtful interfaces, and a willingness to learn.
				</CardTitle>
			</CardHeader>
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2">
				<TranslucentBox className="transition-colors delay-200 duration-500 ease-in-out group-hover:text-blue-900/50" />
			</div>
			<div>
				<div
					className={`absolute bottom-1/2 left-1/2 flex min-w-45 -translate-x-1/2 translate-y-1/2 items-center gap-1 rounded-full border bg-accent/40 p-1 shadow-[0_0_3px_rgba(59,130,246,0.25)] transition-all duration-500 ease-in-out group-hover:shadow-[0_0_3px_rgba(59,130,246,1)] ${
						visible ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted">
						<feature.icon className="size-3 text-muted-foreground" />
					</div>

					<div className="min-w-0">
						<h4 className="truncate font-medium text-[11px]">
							{feature.title}
						</h4>
						<p className="truncate text-[9px] text-muted-foreground">
							{feature.description}
						</p>
					</div>
				</div>
			</div>
		</Card>
	);
};
