interface TranslucentBoxProps {
	/** Maximum width in px. The box shrinks below this to fit its container. */
	size?: number;
	className?: string;
}

// Gradient stop opacities per theme, exposed as CSS variables.
// SVG attributes can't take `dark:` classes, so the stops read these variables instead.
const THEME_VARS = cn(
	"[--rear-top:0.2] dark:[--rear-top:0.48]",
	"[--rear-bottom:0.2] dark:[--rear-bottom:0.32]",
	"[--front-top:0.2] dark:[--front-top:0.55]",
	"[--front-bottom:0.2] dark:[--front-bottom:0.38]",
	"[--body-top:0.1] dark:[--body-top:0.48]",
	"[--body-mid:0.1] dark:[--body-mid:0.38]",
	"[--body-bottom:0.1] dark:[--body-bottom:0.24]",
	"[--open-top:0.2] dark:[--open-top:0.52]",
	"[--open-bottom:0.2] dark:[--open-bottom:0.38]",
);

import { useId } from "react";
import { cn } from "@/lib/utils";

interface TranslucentBoxProps {
	size?: number;
	className?: string;
}

const VIEWBOX_WIDTH = 450;
const VIEWBOX_HEIGHT = 181;

const TranslucentBox = ({ size = 300, className }: TranslucentBoxProps) => {
	// Strip every character that isn't valid in an SVG id
	const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
	const id = (name: string) => `${name}-${uid}`;

	return (
		<svg
			aria-hidden="true"
			className={cn("text-neutral-600", THEME_VARS, className)}
			height={size * (VIEWBOX_HEIGHT / VIEWBOX_WIDTH)}
			viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
			width={size}
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				{/* Rear flaps */}
				<linearGradient id={id("rear")} x1="0" x2="0" y1="0" y2="1">
					<stop
						offset="0%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--rear-top)" }}
					/>
					<stop
						offset="100%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--rear-bottom)" }}
					/>
				</linearGradient>

				{/* Front flap */}
				<linearGradient id={id("front")} x1="0" x2="0" y1="0" y2="1">
					<stop
						offset="0%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--front-top)" }}
					/>
					<stop
						offset="100%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--front-bottom)" }}
					/>
				</linearGradient>

				{/* Main box */}
				<linearGradient id={id("body")} x1="0" x2="0" y1="0" y2="1">
					<stop
						offset="0%"
						stopColor="#555557"
						style={{ stopOpacity: "var(--body-top)" }}
					/>
					<stop
						offset="55%"
						stopColor="#353537"
						style={{ stopOpacity: "var(--body-mid)" }}
					/>
					<stop
						offset="100%"
						stopColor="#1f1f21"
						style={{ stopOpacity: "var(--body-bottom)" }}
					/>
				</linearGradient>

				{/* Inside opening */}
				<linearGradient id={id("opening")} x1="0" x2="0" y1="0" y2="1">
					<stop
						offset="0%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--open-top)" }}
					/>
					<stop
						offset="100%"
						stopColor="currentColor"
						style={{ stopOpacity: "var(--open-bottom)" }}
					/>
				</linearGradient>
			</defs>

			{/* Back left flap */}
			<path
				d="M110 53 L80 53 L34 31 Q29 28 34 24 L57 13 Q62 11 67 14 L110 37 Z"
				fill={`url(#${id("rear")})`}
				stroke="currentColor"
				strokeLinejoin="round"
				strokeOpacity="0.28"
			/>

			{/* Back right flap */}
			<path
				d="M340 53 L370 53 L416 31 Q421 28 416 24 L393 13 Q388 11 383 14 L340 37 Z"
				fill={`url(#${id("rear")})`}
				stroke="currentColor"
				strokeLinejoin="round"
				strokeOpacity="0.28"
			/>

			{/* Main box */}
			<rect
				fill={`url(#${id("body")})`}
				height="150"
				stroke="#777779"
				strokeOpacity="0.22"
				width="290"
				x="80"
				y="53"
			/>

			{/* Inside opening */}
			<path
				d="M110 31 H340 L370 53 H80 Z"
				fill={`url(#${id("opening")})`}
				stroke="currentColor"
				strokeLinejoin="round"
				strokeOpacity="0.28"
			/>

			{/* Front flap, in front of the box */}
			<path
				d="M80 53 L46 112 Q43 117 48 121 H402 Q407 117 404 112 L370 53 Z"
				fill={`url(#${id("front")})`}
				stroke="currentColor"
				strokeLinejoin="round"
				strokeOpacity="0.3"
			/>
		</svg>
	);
};

export default TranslucentBox;
