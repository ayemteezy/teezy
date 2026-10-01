import { useModalStore } from "@/store/modal-store";

export const GLANCE = [
	{
		number: "0",
		label: "hackathons",
		title: "Built & Shipped",
		color: "bg-emerald-500",
		description: "Projects & builds.",
		suffix: "hackathons joined",
		type: "action",
		run: () => useModalStore.getState().open("hackathons"),
	},
	{
		number: "0",
		label: "recognitions",
		title: "Recognized Work",
		color: "bg-orange-500",
		description: "Creativity & impact.",
		suffix: "awards received",
		type: "action",
		run: () => useModalStore.getState().open("recognitions"),
	},
	{
		number: "0",
		label: "certifications",
		title: "Verified Expertise",
		color: "bg-blue-500",
		description: "Credentials & learning.",
		suffix: "certifications earned",
		type: "navigate",
		href: "/certifications",
	},
] as const;
