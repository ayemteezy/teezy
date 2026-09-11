import { Header } from "./header";
import { SidebarContent } from "./sidebar-content";

export const Sidebar = () => {
	return (
		<aside className="sticky top-0 left-0 hidden h-screen w-56 shrink-0 flex-col gap-6 border-border/50 border-r-2 bg-background p-6 lg:flex">
			<Header />
			<SidebarContent />
		</aside>
	);
};
