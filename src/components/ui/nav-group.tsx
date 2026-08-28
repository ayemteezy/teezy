import type { NavItemType, NavSectionType } from "@/constants/routes";
import { NavItem } from "./nav-item";

export const NavGroup = ({ section, items }: NavSectionType) => {
	return (
		<div className="font-mono">
			<h6 className="text-[0.625rem] uppercase text-muted-foreground tracking-wide mb-2">
				{section}
			</h6>
			<div className="flex flex-col gap-2">
				{items.map((item: NavItemType, index: number) => (
					<NavItem
						key={item.href}
						index={index}
						label={item.label}
						href={item.href}
						icon={item.icon}
					/>
				))}
			</div>
		</div>
	);
};
