import { ArrowUpRightIcon } from "lucide-react";

import { GLANCE } from "@/constants/glance";

import { AnimatedButton } from "./animated-button";

export const CTA = () => {
	return (
		<div className="border-b">
			<div className="grid grid-cols-2 lg:grid-cols-4">
				{GLANCE.map((item, index) => (
					<button
						key={item.label}
						type="button"
						className={`group flex cursor-pointer flex-col items-start gap-2 border-r border-b p-4 text-left transition-colors duration-200 ease-in-out hover:bg-accent/25 sm:gap-3 sm:p-5 lg:p-6 ${
							index === 1 ? "border-r-0 lg:border-r" : ""
						} ${
							index === 2
								? "col-span-2 border-r-0 lg:col-span-1 lg:border-r"
								: ""
						}`}
					>
						{/* Header */}
						<div className="flex w-full items-start justify-between">
							<div className="flex items-center gap-2">
								<span className={`size-2.5 shrink-0 sm:size-3 ${item.color}`} />

								<p className="font-medium font-mono text-muted-foreground text-xs uppercase sm:text-xs">
									{item.label}
								</p>
							</div>

							<ArrowUpRightIcon className="size-3.5 text-muted-foreground transition-all duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground sm:size-4" />
						</div>

						{/* Title */}
						<h2 className="font-medium font-sans text-sm leading-tight tracking-tight sm:text-base lg:text-lg">
							{item.title}
						</h2>

						{/* Description */}
						<p className="text-muted-foreground text-xs leading-5 sm:text-sm">
							{item.description}
						</p>
					</button>
				))}

				{/* Reach Out */}
				<div className="col-span-2 flex flex-col items-center gap-4 p-4 sm:p-5 lg:col-span-1 lg:items-start lg:p-6">
					<div className="hidden items-center gap-2 lg:flex">
						<span className="size-3 shrink-0 bg-rose-500" />

						<p className="font-medium font-mono text-[11px] text-muted-foreground uppercase tracking-wide">
							reach out
						</p>
					</div>

					<AnimatedButton className="w-full min-w-44 sm:max-w-sm lg:max-w-none">
						Connect with me
					</AnimatedButton>
				</div>
			</div>
		</div>
	);
};
