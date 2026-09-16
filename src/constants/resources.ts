import type { ResourceGroup } from "@/types/resources";

export const RESOURCES: ResourceGroup[] = [
	{
		category: "documentation",
		resources: [
			{
				name: "MDN Web Docs",
				description:
					"Guides and references for HTML, CSS, JavaScript, and web APIs.",
				url: "https://developer.mozilla.org/",
			},
			{
				name: "React",
				description:
					"Guides and references for building user interfaces with React.",
				url: "https://react.dev/",
			},
			{
				name: "Next.js",
				description:
					"Guides and references for building full-stack Next.js applications.",
				url: "https://nextjs.org/docs",
			},
			{
				name: "TypeScript",
				description: "Handbook and references for TypeScript development.",
				url: "https://www.typescriptlang.org/docs/",
			},
		],
	},

	{
		category: "learning",
		resources: [
			{
				name: "roadmap.sh",
				description:
					"Community-driven roadmaps for learning software development.",
				url: "https://roadmap.sh/",
			},
			{
				name: "The Odin Project",
				description:
					"Project-based curriculum for learning full-stack web development.",
				url: "https://www.theodinproject.com/",
			},
			{
				name: "Full Stack Open",
				description:
					"Hands-on course covering modern full-stack web development.",
				url: "https://fullstackopen.com/en/",
			},
			{
				name: "freeCodeCamp",
				description:
					"Interactive courses and projects for learning programming.",
				url: "https://www.freecodecamp.org/",
			},
			{
				name: "W3Schools",
				description: "Tutorials and examples for web development technologies.",
				url: "https://www.w3schools.com/",
			},
			{
				name: "CS50",
				description:
					"Introduction to computer science, programming, and problem-solving.",
				url: "https://cs50.harvard.edu/",
			},
		],
	},

	{
		category: "practice",
		resources: [
			{
				name: "LeetCode",
				description:
					"Coding problems covering algorithms, data structures, and SQL.",
				url: "https://leetcode.com/",
			},
			{
				name: "HackerRank",
				description:
					"Challenges covering programming, SQL, and problem-solving.",
				url: "https://www.hackerrank.com/",
			},
			{
				name: "Frontend Mentor",
				description:
					"Frontend projects based on real-world designs and layouts.",
				url: "https://www.frontendmentor.io/",
			},
			{
				name: "CSSBattle",
				description: "CSS challenges focused on recreating target images.",
				url: "https://cssbattle.dev/",
			},
			{
				name: "Codewars",
				description: "Coding challenges for improving programming skills.",
				url: "https://www.codewars.com/",
			},
		],
	},

	{
		category: "tools",
		resources: [
			{
				name: "shadcn/ui",
				description:
					"Reusable React components for building modern interfaces.",
				url: "https://ui.shadcn.com/",
			},
			{
				name: "Lucide",
				description: "Open-source icons with customizable styles and paths.",
				url: "https://lucide.dev/",
			},
			{
				name: "Figma",
				description:
					"Tools for interface design, prototyping, and collaboration.",
				url: "https://www.figma.com/",
			},
			{
				name: "Coolors",
				description: "Tools for creating and exploring color palettes.",
				url: "https://coolors.co/",
			},
			{
				name: "Regex101",
				description:
					"Interactive editor for building and testing regular expressions.",
				url: "https://regex101.com/",
			},
			{
				name: "Postman",
				description: "Tools for building, testing, and documenting APIs.",
				url: "https://www.postman.com/",
			},
		],
	},

	{
		category: "design",
		resources: [
			{
				name: "Dribbble",
				description: "UI designs, creative work, and interface inspiration.",
				url: "https://dribbble.com/",
			},
			{
				name: "Behance",
				description: "Creative portfolios, branding, UI, and digital projects.",
				url: "https://www.behance.net/",
			},
			{
				name: "Mobbin",
				description: "Real-world web and mobile interface examples.",
				url: "https://mobbin.com/",
			},
			{
				name: "Awwwards",
				description:
					"Curated websites, interactions, and web design inspiration.",
				url: "https://www.awwwards.com/",
			},
		],
	},

	{
		category: "community",
		resources: [
			{
				name: "GitHub",
				description:
					"Open-source projects, code collaboration, and developer activity.",
				url: "https://github.com/",
			},
			{
				name: "Stack Overflow",
				description:
					"Programming questions, answers, and developer discussions.",
				url: "https://stackoverflow.com/",
			},
			{
				name: "DEV Community",
				description:
					"Articles, discussions, and shared knowledge from developers.",
				url: "https://dev.to/",
			},
		],
	},
];
