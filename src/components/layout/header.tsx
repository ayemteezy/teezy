import { Availability } from "@/components/common/availability";
import { Logo } from "@/components/common/logo";

export const Header = () => {
	return (
		<header className="flex items-center font-mono gap-2">
			<Logo />
			<div className="flex-col">
				<h1 className="font-semibold tracking-tighter">Teezy</h1>
				<Availability />
			</div>
		</header>
	);
};
