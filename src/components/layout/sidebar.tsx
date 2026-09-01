import { NavGroup } from "@/components/ui/nav-group";
import { NAV_SECTIONS } from "@/constants/routes";
import { Header } from "./header";

export const Sidebar = () => {
	return (
		<aside className="w-56 p-6 border border-r-2 flex flex-col gap-6">
			<Header />
			<div className="flex flex-col gap-4">
				{NAV_SECTIONS.map((section) => (
					<NavGroup
						key={section.section}
						section={section.section || "section"}
						items={section.items}
					/>
				))}
			</div>
		</aside>
	);
};
