import { ConnectCard } from "./components/connect-card";
import { TechStackCard } from "./components/tech-stack-card";

export const Bento = () => {
	return (
		<div className="border-y">
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
				<ConnectCard />
				<TechStackCard />
			</div>
		</div>
	);
};
