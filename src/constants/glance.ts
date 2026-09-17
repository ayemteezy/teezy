import { getPortfolioRepos } from "@/data/github";
import { useModalStore } from "@/store/modal-store";
import type { Glance } from "@/types/glance";
import { AWARDS } from "./awards";
import { CERTIFICATIONS } from "./certifications";
import { HACKATHONS } from "./hackathons";

const totalItemsCount = CERTIFICATIONS.reduce((sum, category) => {
	return sum + (category.items?.length || 0);
}, 0);

const formattedTotal =
	totalItemsCount < 10 ? `0${totalItemsCount}` : `${totalItemsCount}`;

const projects = await getPortfolioRepos({ data: {} });
export const GLANCE: Glance[] = [
	{
		number: `0${projects.length}`,
		label: "projects",
		type: "navigate",
		href: "/projects",
	},
	{
		number: `0${HACKATHONS.length}`,
		label: "hackathons",
		type: "action",
		run: () => useModalStore.getState().open("hackathons"),
	},
	{
		number: `0${AWARDS.length}`,
		label: "recognitions",
		type: "action",
		run: () => useModalStore.getState().open("recognitions"),
	},
	{
		number: `${formattedTotal}`,
		label: "certifications",
		type: "navigate",
		href: "/certifications",
	},
];
