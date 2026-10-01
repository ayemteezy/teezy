import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

interface ArrowProps extends ComponentPropsWithoutRef<"svg"> {
	className?: string;
}

export const Arrow = ({ className, ...props }: ArrowProps) => {
	return (
		<svg
			viewBox="0 0 80 64"
			className={cn("h-10 w-12 shrink-0", className)}
			fill="none"
			aria-hidden="true"
			{...props}
		>
			<path
				d="M72 8
          C68 20, 58 30, 46 36
          C35 42, 23 45, 10 49"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>

			<path
				d="M10 49
          C14 46, 17 43, 19 39"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
			/>

			<path
				d="M10 49
          C14 50, 18 50, 21 49"
				stroke="currentColor"
				strokeWidth="1.75"
				strokeLinecap="round"
			/>
		</svg>
	);
};
