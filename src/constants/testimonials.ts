export type Testimonial = {
	name: string;
	role: string;
	company?: string;
	quote: string;
	initials: string;
	date?: string;
	pinned: boolean;
};

export const TESTIMONIALS: Testimonial[] = [
	{
		name: "Via Cabactulan",
		role: "Project Partner",
		quote:
			"It was smooth and productive. You kept the code organized and you paid close attention to the design details, which helped the project stay structured and look consistent. You were easy to work with, and got things done on schedule. Your organization, attention to detail, and reliability made the project easier to manage and helped us move forward successfully.",
		initials: "VC",
		pinned: true,
	},
	{
		name: "John Raymond Bataan",
		role: "System Analyst",
		quote:
			"Working with Laurence was a great experience. He was always my go-to person whenever I needed help with programming and web development. His advice on design, structure, and the proper way to build a website was incredibly helpful. I really appreciated his knowledge, patience, and willingness to help.",
		initials: "JR",
		pinned: true,
	},
	{
		name: "Ahron Montes",
		role: "Freelance Client",
		quote:
			"Working with Laurence is wonderful, He works well, he looks at all errors carefully to fix them, and he is good at analyzing problems.",
		initials: "AM",
		pinned: true,
	},
];
