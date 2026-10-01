import { ChevronDownIcon } from "lucide-react";
import { motion } from "motion/react";

export const AnimatedScroll = () => {
	return (
		<div className="flex flex-col items-center gap-2 text-center text-foreground/50">
			<div className="flex h-6 w-3 items-start justify-center overflow-hidden rounded-full border-2 border-foreground/30 p-1">
				<motion.span
					className="size-1.5 shrink-0 rounded-full bg-foreground"
					animate={{
						y: [-2, 9, -2],
						opacity: [0.6, 1, 0.6],
					}}
					transition={{
						duration: 2,
						ease: "easeInOut",
						repeat: Infinity,
					}}
				/>
			</div>
			<div className="flex flex-col items-center">
				<span className="font-mono text-[10px] uppercase tracking-[0.2em]">
					Scroll down
				</span>
				<ChevronDownIcon className="mt-2 size-4" />
			</div>
		</div>
	);
};
