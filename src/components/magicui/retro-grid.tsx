import { cn } from "@/lib/utils";

export default function RetroGrid({
	className,
	angle = 65,
}: {
	className?: string;
	angle?: number;
}) {
	return (
		<div
			className={cn(
				"pointer-events-none absolute size-full overflow-hidden opacity-50 [perspective:200px]",
				className,
			)}
			style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
		>
			{/* Grid */}
			<div className="absolute inset-0 [transform:rotateX(var(--grid-angle))]">
				<div
					className={cn(
						"animate-retro-grid",

						"[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

						"[background-image:linear-gradient(to_right,rgba(37,99,235,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(37,99,235,0.5)_1px,transparent_0)]", // Blue-600 in light mode

						"dark:[background-image:linear-gradient(to_right,rgba(59,130,246,0.4)_1px,transparent_0),linear-gradient(to_bottom,rgba(59,130,246,0.4)_1px,transparent_0)]", // Blue-500 in dark mode
					)}
				/>
			</div>

			{/* Background Gradient */}
			<div className="absolute inset-0 bg-gradient-to-t from-stone-50 to-90% to-transparent dark:from-slate-950" />
		</div>
	);
}
