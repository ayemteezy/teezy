import type { StackCategory } from "@/types/stack";

export const STACK: StackCategory[] = [
	{
		label: "frontend",
		stack: [
			{ name: "JavaScript", pinned: true },
			{ name: "TypeScript", pinned: true },
			{ name: "React", pinned: true },
			{ name: "Next.js", pinned: true },
			{ name: "TanStack Start", pinned: true },
			{ name: "TanStack Router" },
			{ name: "TanStack Query", pinned: true },
			{ name: "React Native", pinned: true },
			{ name: "Expo" },
			{ name: "Tailwind CSS", pinned: true },
			{ name: "Styled Components" },
			{ name: "HTML" },
		],
	},
	{
		label: "backend",
		stack: [
			{ name: "Node.js", pinned: true },
			{ name: "Bun", pinned: true },
			{ name: "Express.js" },
			{ name: "Prisma ORM" },
			{ name: "Drizzle ORM" },
			{ name: "PostgreSQL", pinned: true },
			{ name: "MongoDB" },
			{ name: "MySQL" },
			{ name: "REST" },
			{ name: "GraphQL" },
		],
	},
	{
		label: "devops & cloud",
		stack: [{ name: "Docker" }, { name: "GitHub Actions" }],
	},
	{
		label: "developer tools",
		stack: [
			{ name: "Git", pinned: true },
			{ name: "GitHub", pinned: true },
			{ name: "VS Code", pinned: true },
			{ name: "Zed" },
			{ name: "Neovim" },
			{ name: "Biome", pinned: true },
			{ name: "ESLint" },
			{ name: "Prettier" },
			{ name: "Webpack" },
			{ name: "Vite" },
			{ name: "Figma" },
		],
	},
	{
		label: "deployment",
		stack: [{ name: "Vercel", pinned: true }, { name: "Netlify" }],
	},
];
