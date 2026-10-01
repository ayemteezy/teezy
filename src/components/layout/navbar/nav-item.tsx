import { useMatchRoute, useNavigate } from "@tanstack/react-router";
import { cn } from "cn";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
	label: string;
	href: string;
	icon: LucideIcon;
}

export const NavItem = ({ label, href, icon: Icon }: NavItemProps) => {
	const navigate = useNavigate();
	const matchRoute = useMatchRoute();

	const isActive = matchRoute({ to: href, fuzzy: true });

	return (
		<Button
			onClick={() => navigate({ to: href })}
			size="lg"
			className={cn(
				"rounded-full px-4 font-mono text-[13px] text-muted-foreground capitalize shadow-none hover:bg-transparent hover:text-foreground",
				isActive
					? "bg-foreground/10 text-foreground backdrop:blur-md hover:bg-foreground/15"
					: "bg-transparent",
			)}
		>
			<span className="sm:hidden">
				<Icon className="size-4" />
			</span>

			<span className="hidden sm:inline">{label}</span>
		</Button>
	);
};
