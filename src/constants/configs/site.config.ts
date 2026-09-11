export type AvailabilityStatus =
	| "available"
	| "busy"
	| "offline"
	| "maintenance";

export const AVAILABILITY_CONFIG: Record<
	AvailabilityStatus,
	{ label: string }
> = {
	available: { label: "available for work" },
	busy: { label: "currently busy" },
	offline: { label: "unavailable" },
	maintenance: { label: "under maintenance" },
};

export const SITE = {
	meta: {
		title: "Teezy",
		description:
			"I'm Laurence Lester Cariño, the developer behind Teezy. I'm a Full Stack Developer focused on building clean, performant, and thoughtful web applications.",
		keywords: [
			"Teezy",
			"Laurence Lester Cariño",
			"full stack developer",
			"web developer",
			"portfolio",
			"React developer",
			"TypeScript",
		],
		ogImage: "/images/og-image.jpg",
		siteUrl: "https://teezy-dev.vercel.app/",
		twitterHandle: "@ayemteezy_",
	},

	favicon: {
		light: "/log-dark.svg",
		dark: "/logo-dark.svg",
		ico: "/favicon.ico",
	},

	profile: {
		name: "Laurence Lester Cariño",
		title: "Full Stack Developer / Aspiring Software Engineer",

		cv: {
			path: "/documents/CV.pdf",
			filename: "Laurence_Lester_Carino_CV.pdf",
		},

		availability: {
			status: "maintenance" as AvailabilityStatus,
		},
	},

	socials: [
		{ label: "github", href: "https://github.com/ayemteezy/" },
		{
			label: "linkedin",
			href: "https://linkedin.com/in/laurence-lester-cariño/",
		},
		{ label: "x", href: "https://x.com/ayemteezy_/" },
	],
} as const;
