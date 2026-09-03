import { Link } from "@tanstack/react-router";
import { ArrowDownRightIcon, MenuIcon } from "lucide-react";
import { Logo } from "@/components/common/logo";
import { Button } from "@/components/ui/button";
import { useSidebarStore } from "@/store/sidebar-store";

export const Navbar = () => {
	const { toggleSidebar } = useSidebarStore();

	return (
		<nav className="fixed top-0 block w-full border border-b bg-background py-2 lg:hidden">
			<div className="container flex items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<Logo />
					<h1 className="font-pixel">Teezy</h1>
				</Link>
				<div className="flex items-center gap-2">
					<Button
						className="flex w-fit rounded-sm font-mono uppercase"
						size="lg"
					>
						<a
							href="/documents/CV.pdf"
							download="Laurence_Lester_Carino_CV.pdf"
						>
							download cv
						</a>
						<ArrowDownRightIcon className="size-3" aria-hidden="true" />
						<span className="sr-only">(PDF document, downloads file)</span>
					</Button>
					<Button
						className="rounded-sm"
						variant="outline"
						size="lg"
						onClick={toggleSidebar}
					>
						<MenuIcon />
					</Button>
				</div>
			</div>
		</nav>
	);
};
