import { cn } from "cn";
import { ArrowRightIcon } from "lucide-react";
import type { ReactNode } from "react";

interface AnimatedButtonProps {
	children: ReactNode;
	className?: string;
}

export const AnimatedButton = ({
	children,
	className,
}: AnimatedButtonProps) => {
	return (
		<button
			type="button"
			className={cn(
				"group relative flex h-11 min-w-44 cursor-pointer items-center overflow-hidden rounded-full border bg-accent pr-1 pl-5 shadow transition-colors duration-300 hover:bg-foreground",
				className,
			)}
		>
			{/* Expanding background */}
			<span className="absolute inset-y-1 right-1 z-0 w-9 rounded-full bg-foreground transition-all duration-200 ease-out group-hover:w-[calc(100%-0.5rem)]" />

			{/* Text */}
			<span className="relative z-10 flex-1 px-2 text-center font-semibold text-sm transition-colors duration-500 group-hover:text-background">
				{children}
			</span>

			{/* Arrow viewport */}
			<span className="relative z-10 flex size-9 shrink-0 items-center justify-center overflow-hidden">
				{/* Current arrow */}
				<ArrowRightIcon className="absolute size-4 text-background transition-transform duration-250 ease-out group-hover:translate-x-[180%]" />

				{/* Incoming arrow */}
				<ArrowRightIcon className="absolute size-4 translate-x-[-180%] text-background transition-transform duration-250 ease-out group-hover:translate-x-0" />
			</span>
		</button>
	);
};
