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
		<Link to="/testimonials">
			<Card className="bg-foreground/1 shadow-lg/5 ring-0 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl/7">
				<div className="px-4">
					<QuoteIcon className="size-4 fill-muted-foreground/10 text-muted-foreground/10" />

					<p className="mt-2 line-clamp-4 font-sans text-sm leading-relaxed">
						{data.quote}
					</p>

					<Separator className="mt-4" />

					<div className="flex min-w-0 items-center gap-2.5 pt-3">
						<Avatar className="size-7.5 shrink-0">
							<AvatarFallback className="font-mono text-[0.625rem]">
								{data.initials}
							</AvatarFallback>
						</Avatar>
						<div className="min-w-0">
							<p className="truncate font-medium font-sans text-foreground text-xs">
								{data.name}
							</p>
							<span className="block truncate font-mono text-[0.625rem] text-muted-foreground">
								{data.role}
							</span>
						</div>
					</div>
				</div>
			</Card>
		</Link>
	);
};
