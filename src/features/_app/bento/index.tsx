import { ConnectCard } from "./components/connect-card";
import { FeatureCard } from "./components/feature-card";
import { GlobeCard } from "./components/globe-card";
import { TechStackCard } from "./components/tech-stack-card";
import { UsesCard } from "./components/uses-card";

export const Bento = () => {
	return (
		<div className="border-y">
			<div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-9">
				<ConnectCard />
				<TechStackCard />
				<FeatureCard />
				<GlobeCard />
				<UsesCard />
			</div>
		</div>
	);
};
