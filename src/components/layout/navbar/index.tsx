import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLinks } from "@/components/layout/navbar/nav-links";

export const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setShowLinks(true), 2000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<header className="pointer-events-none fixed bottom-4 z-50 w-full md:top-4">
			<motion.nav
				layout
				transition={{ type: "spring", stiffness: 180, damping: 20 }}
				className="pointer-events-auto mx-auto w-max rounded-full border bg-white/10 p-0.5 shadow-xs backdrop-blur-md dark:border-t-foreground/20"
			>
				<div className="flex items-center justify-center overflow-hidden whitespace-nowrap font-medium text-sm tracking-tight">
					{!showLinks ? (
						<motion.div
							key="greeting"
							initial={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ duration: 0.3 }}
							className="px-4 py-1.5 font-mono capitalize"
						>
							Welcome, I'm Teezy.
						</motion.div>
					) : (
						<motion.div
							key="links"
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.4, delay: 0.1 }}
						>
							<NavLinks />
						</motion.div>
					)}
				</div>
			</motion.nav>
		</header>
	);
};
