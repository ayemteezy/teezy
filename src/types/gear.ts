export type GearCategory =
	| "computer"
	| "peripherals"
	| "workspace"
	| "accessories";

export type Gear = {
	image: string;
	name: string;
	description: string;
	link?: string;
};

export type GearGroup = {
	category: GearCategory;
	gears: Gear[];
};
