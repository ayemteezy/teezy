import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import type { NavItemType } from "@/constants/routes";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";

type NavItemProps = NavItemType & { index: number };

export const NavItem = ({ index, label, href, icon: Icon }: NavItemProps) => {
	const { closeSidebar } = useSidebarStore();
	const location = useLocation();
	const currentPathname = location.pathname;

	const isActive = href === currentPathname;

	return (
		<Link
			to={href}
			className={cn(
				"flex items-center gap-3 text-muted-foreground hover:text-foreground",
				isActive && "text-foreground",
			)}
			onClick={closeSidebar}
		>
			{isActive && <ArrowRightIcon className="size-3" />}
			{Icon ? (
				<Icon className="size-3.5" />
			) : (
				<span className="text-xs">0{index + 1}</span>
			)}
			<p className="capitalize lg:text-[13px]">{label}</p>
		</Link>
	);
};
