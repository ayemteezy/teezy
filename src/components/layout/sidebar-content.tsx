import { NavGroup } from "@/components/ui/nav-group";
import { NAV_SECTIONS } from "@/constants/routes";

export const SidebarContent = () => {
	return (
		<div className="flex flex-col gap-4">
			{NAV_SECTIONS.map((section) => (
				<NavGroup
					key={section.section}
					section={section.section || "section"}
					items={section.items}
				/>
			))}
		</div>
	);
};
