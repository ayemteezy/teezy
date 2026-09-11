import { Link } from "@tanstack/react-router";
import { QuoteIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Testimonial } from "@/constants/testimonials";

interface TestimonialItemProps {
	data: Testimonial;
}

export const TestimonialItem = ({ data }: TestimonialItemProps) => {
	return (
		<Link to="/testimonials" className="block w-full">
			<Card className="flex h-50 flex-col rounded-xl bg-foreground/2 p-4 shadow-lg/7 ring-0 transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl/8">
				<div className="flex min-h-0 flex-1 flex-col">
					<QuoteIcon className="size-4 shrink-0 fill-muted-foreground/10 text-muted-foreground/20" />

					<div className="mt-1.5 min-h-0 flex-1 overflow-hidden">
						<p className="line-clamp-4 font-normal font-sans text-[0.8125rem] leading-normal">
							{data.quote}
						</p>
					</div>
				</div>

				<div className="mt-auto shrink-0 space-y-2.5 pt-3">
					<Separator className="bg-border/40" />

					<div className="flex min-w-0 items-center gap-2.5">
						<Avatar className="size-7.5 shrink-0 rounded-full border border-border/40">
							<AvatarFallback className="font-mono text-[0.625rem] text-muted-foreground">
								{data.initials}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0 space-y-0.5">
							<p className="truncate font-sans font-semibold text-foreground text-xs">
								{data.name}
							</p>
							<span className="block truncate font-mono text-[0.625rem] text-muted-foreground tracking-wider">
								{data.role}
							</span>
						</div>
					</div>
				</div>
			</Card>
		</Link>
	);
};
