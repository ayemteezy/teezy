export type Hackathons = {
	title: string;
	description: string;
	year: number;
	featured?: boolean;
};

export const HACKATHONS: Hackathons[] = [
	{
		title: "AppCon 2024 Hackathon",
		description: "Built the frontend and backend as the full-stack developer.",
		year: 2024,
		featured: true,
	},
];
