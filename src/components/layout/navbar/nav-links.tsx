import { APP_ROUTES } from "@/constants/routes";
import { NavItem } from "./nav-item";

export const NavLinks = () => {
	return (
		<div className="flex items-center">
			{APP_ROUTES.map((route) => (
				<NavItem
					key={route.label}
					label={route.label}
					href={route.href}
					icon={route.icon}
				/>
			))}
		</div>
	);
};
