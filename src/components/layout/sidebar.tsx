import { Header } from "./header";
import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
	return (
		<aside className="sticky top-0 hidden h-screen w-56 flex-col gap-6 border-border/50 border-r-2 p-6 lg:flex">
			<Header />
			<SidebarContent />
		</aside>
	);
};
