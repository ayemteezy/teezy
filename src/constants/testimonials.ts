export type Testimonial = {
	name: string;
	role: string;
	quote: string;
	initials: string;
	date: string;
	pinned: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
	{
		name: "Via Cabactulan",
		role: "Project Partner/Collaborator",
		quote:
			"It was smooth and productive. You kept the code organized and you paid close attention to the design details, which helped the project stay structured and look consistent. You were easy to work with, and got things done on schedule. Your organization, attention to detail, and reliability made the project easier to manage and helped us move forward successfully.",
		initials: "VC",
		date: "2026-09",
		pinned: true,
	},
];
