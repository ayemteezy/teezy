import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import type { NavItemType } from "@/constants/routes";
import { cn } from "@/lib/utils";

type NavItemProps = NavItemType & { index: number };

export const NavItem = ({ index, label, href, icon: Icon }: NavItemProps) => {
	const location = useLocation();
	const currentPathname = location.pathname;

	const isActive = href === currentPathname;

	return (
		<Link
			to={href}
			className={cn(
				"flex items-center gap-2 text-muted-foreground hover:text-foreground",
				isActive && "text-foreground",
			)}
		>
			{isActive && <ArrowRightIcon className="size-3" />}
			{Icon ? (
				<Icon className="size-3" />
			) : (
				<span className="text-[0.625rem]">0{index + 1}</span>
			)}
			<p className="text-[0.8125rem] capitalize">{label}</p>
		</Link>
	);
};
