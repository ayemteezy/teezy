import { useModalStore } from "@/store/modal-store";

export type Glance =
	| { number: string; label: string; type: "navigate"; href: string }
	| { number: string; label: string; type: "action"; run: () => void };

export const GLANCE: Glance[] = [
	{
		number: "03",
		label: "projects",
		type: "navigate",
		href: "/projects",
	},
	{
		number: "01",
		label: "hackathons",
		type: "action",
		run: () => useModalStore.getState().open("hackathons"),
	},
	{
		number: "04",
		label: "recognitions",
		type: "action",
		run: () => useModalStore.getState().open("recognitions"),
	},
	{
		number: "08",
		label: "certifications",
		type: "navigate",
		href: "/certifications",
	},
];
