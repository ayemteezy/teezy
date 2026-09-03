import { XIcon } from "lucide-react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/store/sidebar-store";
import { Availability } from "../common/availability";
import { SidebarContent } from "./sidebar-content";

const DESKTOP_BREAKPOINT = 1024;
export const MobileSidebar = () => {
	const { isOpen, toggleSidebar, closeSidebar } = useSidebarStore();

	useEffect(() => {
		if (!isOpen) return;

		const handleResize = () => {
			if (window.innerWidth >= DESKTOP_BREAKPOINT) {
				closeSidebar();
			}
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [isOpen, closeSidebar]);

	return (
		<aside
			className={cn(
				"fixed top-0 right-0 bottom-0 z-100 w-full border-l bg-background transition-transform duration-500 ease-in-out sm:w-1/3",
				isOpen ? "translate-x-0" : "translate-x-full",
			)}
		>
			<div className="flex items-center justify-between border-b p-[12.5px]">
				<Availability />
				<Button size="icon-sm" variant="ghost" onClick={toggleSidebar}>
					<XIcon />
				</Button>
			</div>
			<div className="p-4">
				<SidebarContent />
			</div>
		</aside>
	);
};
