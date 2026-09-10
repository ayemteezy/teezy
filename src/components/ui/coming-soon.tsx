import { ArrowRightIcon } from "lucide-react";
import { Button } from "./button";

export const ComingSoon = () => {
	return (
		<div className="p-4">
			<div className="w-full space-y-3 antialiased sm:space-y-5">
				<div className="space-y-1.5 sm:space-y-2">
					<div className="flex select-none flex-row items-center justify-between pb-1.5 font-mono text-[0.65rem] text-muted-foreground uppercase tracking-wider sm:text-xs">
						<span className="truncate pr-2">Coming Soon</span>
					</div>

					<h1 className="select-none pt-1 font-pixel text-3xl text-foreground lowercase tracking-tight sm:text-4xl">
						This page is still taking shape.
					</h1>
				</div>

				<div className="pl-0.5">
					<p className="max-w-2xl font-normal font-sans text-[0.8125rem] text-muted-foreground leading-[1.6] sm:text-[0.875rem] sm:leading-[1.65]">
						I am working on a thoughtful version of this space. Check back soon,
						or explore another part of the portfolio in the meantime.
					</p>
				</div>
				<Button variant="ghost" className="text-muted-foreground uppercase">
					Return Home <ArrowRightIcon className="ml-1 size-3" />
				</Button>
			</div>
		</div>
	);
};
