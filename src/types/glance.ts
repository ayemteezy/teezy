export type Glance =
	| { number: string; label: string; type: "navigate"; href: string }
	| { number: string; label: string; type: "action"; run: () => void };
