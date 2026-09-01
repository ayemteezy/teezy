import { Link } from "@tanstack/react-router";
import { Availability } from "@/components/common/availability";
import { Logo } from "@/components/common/logo";

export const Header = () => {
	return (
		<header>
			<Link to="/" className="flex items-center gap-2">
				<Logo />
				<div className="flex-col">
					<h1 className="font-sans font-semibold">Teezy</h1>
					<Availability />
				</div>
			</Link>
		</header>
	);
};
