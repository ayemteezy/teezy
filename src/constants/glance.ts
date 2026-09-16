import { useModalStore } from "@/store/modal-store";
import type { Glance } from "@/types/glance";

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
		number: "03",
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
