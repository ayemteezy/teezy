export type Glance = {
	number: string;
	label: string;
	onClick?: () => void;
};

export const GLANCE: Glance[] = [
	{
		number: "03",
		label: "projects",
	},
	{
		number: "01",
		label: "hackathons",
	},
	{
		number: "04",
		label: "recognitions",
	},
	{
		number: "08",
		label: "certifications",
	},
];
