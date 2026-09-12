export type Awards = {
	title: string;
	description: string;
	year: number;
	featured?: boolean;
};

export const AWARDS: Awards[] = [
	{
		title: "Top 7 — AppCon 2024",
		description: "Top 20 of 178 teams, finishing among the top 7 finalists.",
		year: 2025,
		featured: true,
	},
	{
		title: "3rd Place — Best Thesis",
		description: "Recognized for excellence in thesis development.",
		year: 2025,
	},
	{
		title: "3rd Place — Most Creative",
		description: "Recognized for creativity and innovation.",
		year: 2025,
	},
] as const;
