import { ConnectCard } from "@/components/cards/connect-card";
import { FeatureCard } from "@/components/cards/feature-card";
import { GlobeCard } from "@/components/cards/globe-card";
import { TechStackCard } from "@/components/cards/tech-stack-card";
import { UsesCard } from "@/components/cards/uses-card";

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
