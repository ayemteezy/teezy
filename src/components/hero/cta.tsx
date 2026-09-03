import { Link } from "@tanstack/react-router";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/constants/socials";

export const CTA = () => {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<Button
				className="hidden w-fit rounded-sm font-mono uppercase md:flex"
				size="lg"
			>
				<a href="/documents/CV.pdf" download="Laurence_Lester_Carino_CV.pdf">
					download cv
				</a>
				<ArrowDownRightIcon className="size-3" aria-hidden="true" />
				<span className="sr-only">(PDF document, downloads file)</span>
			</Button>

			<div className="flex flex-wrap items-center">
				<span className="mr-2 whitespace-nowrap font-mono text-[10px] text-muted-foreground uppercase">
					find me on
				</span>
				<div>
					{SOCIALS.map((social) => (
						<Button
							key={social.href}
							className="px-2 font-mono text-xs"
							variant="ghost"
							size="xs"
							render={
								<Link
									to={social.href}
									target="_blank"
									rel="noopener noreferrer"
								/>
							}
						>
							{social.label}
							<ArrowUpRightIcon className="size-3" />
						</Button>
					))}
				</div>
			</div>
		</div>
	);
};
