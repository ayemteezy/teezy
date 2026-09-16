import { GEARS } from "@/constants/gear";
import { GearItem } from "./gear-item";

export const Gear = () => {
	return (
		<div className="space-y-12">
			{GEARS.map((item) => (
				<div key={item.category} className="space-y-3">
					<h2 className="font-medium text-muted-foreground/60 text-xs uppercase tracking-wider">
						{item.category}
					</h2>

					<div className="grid grid-cols-1 gap-4 md:grid-cols-3">
						{item.gears.map((gear) => (
							<GearItem key={gear.name} data={gear} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
