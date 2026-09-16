export type ResourceCategory =
	| "learning"
	| "documentation"
	| "practice"
	| "tools"
	| "design"
	| "ai"
	| "community";

export type Resource = {
	name: string;
	description: string;
	url: string;
};

export type ResourceGroup = {
	category: ResourceCategory;
	resources: Resource[];
};
