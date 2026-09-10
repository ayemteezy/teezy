import {
	BookOpenIcon,
	LaptopMinimalIcon,
	type LucideIcon,
	SquareTextIcon,
} from "lucide-react";

/**
 * Internal route paths used to build the sidebar navigation.
 * Not exported - access route paths via {@link NAV_SECTIONS} instead.
 */
const ROUTES = {
	EXPLORE: {
		STACK: "/stack",
		PROJECTS: "/projects",
		EXPERIENCE: "/experience",
		CERTIFICATIONS: "/certifications",
		TESTIMONIALS: "/testimonials",
	},
	PERSONAL: {
		BLOG: "/blog",
		GEAR: "/gear",
		RESOURCES: "/resources",
	},
} as const;

/**
 * A single sidebar navigation link with expanded descriptive telemetry data.
 */
export type NavItemType = {
	label: string;
	href: string;
	accent: string;
	description: string;
	icon?: LucideIcon;
};

/**
 * A group of nav items under a shared section heading.
 */
export type NavSectionType = {
	section: string;
	items: NavItemType[];
};

/**
 * Sidebar navigation grouped into sections.
 * Each section has a display label and a list of nav items to render.
 */
export const NAV_SECTIONS: NavSectionType[] = [
	{
		section: "explore",
		items: [
			{
				label: "stack",
				href: ROUTES.EXPLORE.STACK,
				accent: "tech stack",
				description:
					"A comprehensive index of the programming languages, database layers, runtimes, and engineering frameworks I use daily.",
			},
			{
				label: "projects",
				href: ROUTES.EXPLORE.PROJECTS,
				accent: "selected work",
				description:
					"A directory of full-stack platforms, open-source utilities, and digital tools I have designed and deployed into production.",
			},
			{
				label: "experience",
				href: ROUTES.EXPLORE.EXPERIENCE,
				accent: "work history",
				description:
					"Tracking my professional software development timeline — spanning full-stack roles, client services, and application architecture builds.",
			},
			{
				label: "certifications",
				href: ROUTES.EXPLORE.CERTIFICATIONS,
				accent: "credentials",
				description:
					"Verified platform validations, professional technical credentials, and engineering specializations mapping my skills.",
			},
			{
				label: "testimonials",
				href: ROUTES.EXPLORE.TESTIMONIALS,
				accent: "recommendations",
				description:
					"Collected reviews, feedback logs, and collaborative notes from technical directors, engineering teammates, and project clients.",
			},
		],
	},
	{
		section: "personal",
		items: [
			{
				label: "blog",
				href: ROUTES.PERSONAL.BLOG,
				icon: SquareTextIcon,
				accent: "insights & publications",
				description:
					"Deep-dives, framework reviews, and written logs breaking down software architecture patterns and engineering problems.",
			},
			{
				label: "gear",
				href: ROUTES.PERSONAL.GEAR,
				icon: LaptopMinimalIcon,
				accent: "workspace setup",
				description:
					"A curated log detailing my workspace setup, localized server hardware, terminal themes, and development configurations.",
			},
			{
				label: "resources",
				href: ROUTES.PERSONAL.RESOURCES,
				icon: BookOpenIcon,
				accent: "knowledge base",
				description:
					"An open collection of engineering whitepapers, reference code modules, design systems, and educational toolkits.",
			},
		],
	},
];
