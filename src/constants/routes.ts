import {
	BookOpenCheckIcon,
	BookOpenIcon,
	LaptopMinimalIcon,
	type LucideIcon,
	SquareTextIcon,
	UsersRoundIcon,
} from "lucide-react";

/**
 * Interal route paths used to build the sidebar navigation.
 * Not exported - access route paths via {@link NAV_SECTIONS} instead.
 */
const ROUTES = {
	EXPLORE: {
		PROJECTS: "/projects",
		EXPERIENCE: "/experience",
		STACK: "/stack",
		CERTIFICATIONS: "/certifications",
		AFFILIATIONS: "/affiliations",
	},
	CONNECT: {
		COLLABS: "/collabs",
		GUESTBOOK: "/guestbook",
	},
	PERSONAL: {
		BLOG: "/blog",
		GEAR: "/gear",
		RESOURCES: "/resources",
	},
} as const;

/**
 * A single sidebar navigation link.
 */
export type NavItemType = {
	label: string;
	href: string;
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
 *
 * @property section - Section heading shown in the sidebar
 * @property items - Nav links belonging to this section
 * @property items[].label - Display text for the link
 * @property items[].href - Route path the link navigates to
 * @property items[].icon - Icon name
 */
export const NAV_SECTIONS = [
	{
		section: "explore",
		items: [
			{ label: "projects", href: ROUTES.EXPLORE.PROJECTS },
			{ label: "experience", href: ROUTES.EXPLORE.EXPERIENCE },
			{ label: "stack", href: ROUTES.EXPLORE.STACK },
			{ label: "certifications", href: ROUTES.EXPLORE.CERTIFICATIONS },
			{ label: "affiliations", href: ROUTES.EXPLORE.AFFILIATIONS },
		],
	},
	{
		section: "connect",
		items: [
			{ label: "collabs", href: ROUTES.CONNECT.COLLABS, icon: UsersRoundIcon },
			{
				label: "guestbook",
				href: ROUTES.CONNECT.GUESTBOOK,
				icon: BookOpenCheckIcon,
			},
		],
	},
	{
		section: "personal",
		items: [
			{ label: "blog", href: ROUTES.PERSONAL.BLOG, icon: SquareTextIcon },
			{ label: "gear", href: ROUTES.PERSONAL.GEAR, icon: LaptopMinimalIcon },
			{
				label: "resources",
				href: ROUTES.PERSONAL.RESOURCES,
				icon: BookOpenIcon,
			},
		],
	},
];
