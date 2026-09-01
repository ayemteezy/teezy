import { Link } from "@tanstack/react-router";
import { ArrowDownRightIcon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIALS } from "@/constants/socials";

export const CTA = () => {
	return (
		<div className="flex items-center justify-between">
			<a
				href="/documents/CV.pdf"
				download="Laurence_Lester_Carino_CV.pdf"
				className="inline-block"
			>
				<Button className="rounded-sm font-mono uppercase" size="lg">
					download cv
					<ArrowDownRightIcon className="size-3" aria-hidden="true" />
					<span className="sr-only">(PDF document, downloads file)</span>
				</Button>
			</a>

			<div className="flex items-center gap-3">
				<span className="uppercase font-mono text-[10px]">find me on</span>
				<div>
					{SOCIALS.map((social) => (
						<Button
							key={social.href}
							className="font-mono text-xs"
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
