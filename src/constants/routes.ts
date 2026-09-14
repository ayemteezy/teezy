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
					"A collection of the languages, frameworks, runtimes, databases, and tools I use to build web applications.",
			},
			{
				label: "projects",
				href: ROUTES.EXPLORE.PROJECTS,
				accent: "selected work",
				description:
					"A selection of personal, academic, and practical projects showcasing how I build and solve problems with code.",
			},
			{
				label: "experience",
				href: ROUTES.EXPLORE.EXPERIENCE,
				accent: "experience",
				description:
					"A timeline of my internship, academic, mentoring, and hands-on experience in software and web development.",
			},
			{
				label: "certifications",
				href: ROUTES.EXPLORE.CERTIFICATIONS,
				accent: "credentials",
				description:
					"A collection of certifications and technical credentials that reflect my continued learning and development.",
			},
			{
				label: "testimonials",
				href: ROUTES.EXPLORE.TESTIMONIALS,
				accent: "recommendations",
				description:
					"Feedback and recommendations from people I have worked with through projects, internships, and academic work.",
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
				accent: "insights & notes",
				description:
					"Notes, lessons, and practical write-ups about things I learn while building and exploring software development.",
			},
			{
				label: "gear",
				href: ROUTES.PERSONAL.GEAR,
				icon: LaptopMinimalIcon,
				accent: "workspace setup",
				description:
					"A look at the hardware, software, and development tools I use for coding, learning, and building projects.",
			},
			{
				label: "resources",
				href: ROUTES.PERSONAL.RESOURCES,
				icon: BookOpenIcon,
				accent: "useful resources",
				description:
					"A collection of useful references, documentation, tools, and learning resources I find helpful.",
			},
		],
	},
];
