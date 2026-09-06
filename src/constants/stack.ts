export type StackItem = {
  name: string;
  pinned?: boolean;
};

export type StackCategory = {
  label: string;
  stack: StackItem[];
};

export const STACK: StackCategory[] = [
  {
    label: "frontend",
    stack: [
      { name: "HTML" },
      { name: "JavaScript", pinned: true },
      { name: "TypeScript", pinned: true },
      { name: "Next.js" },
      { name: "TanStack Start", pinned: true },
      { name: "TanStack Router" },
      { name: "TanStack Query" },
      { name: "React", pinned: true },
      { name: "Next.js", pinned: true },
      { name: "React Expo", pinned: true },
      { name: "React Native", pinned: true },
      { name: "Tailwind CSS" },
      { name: "Zustand" },
    ],
  },
  {
    label: "backend",
    stack: [
      { name: "Node.js", pinned: true },
      { name: "Bun" },
      { name: "Drizzle ORM" },
      { name: "PostgreSQL", pinned: true },
      { name: "MongoDB" },
      { name: "MySQL" },
    ],
  },
  {
    label: "tools",
    stack: [
      { name: "Git", pinned: true },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Figma" },
    ],
  },
];

