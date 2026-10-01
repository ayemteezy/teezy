import type { SVGProps } from "react";

export const Loop = ({ className, ...props }: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 240 100"
			width="100%"
			height="100%"
			className={className}
			aria-hidden="true"
			{...props}
		>
			<g
				fill="none"
				stroke="currentColor"
				strokeWidth={2.5}
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<circle cx="20" cy="40" r="30" />

				<path d="M 120,40 C 100,0 55,0 50,40" />
				<path d="M 120,40 C 110,75 55,90 50,40" />

				<path d="M 120,40 C 140,0 185,0 190,40" />
				<path d="M 120,40 C 130,75 185,90 190,40" />

				<circle cx="220" cy="40" r="30" />
			</g>
		</svg>
	);
};
