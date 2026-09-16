export type ExperienceType =
	| "full-time"
	| "part-time"
	| "contract"
	| "freelance"
	| "internship"
	| "academic";

export type ExperienceArrangement = "onsite" | "remote" | "hybrid";

export type ExperienceDate = {
	start: string; // "2025-01"
	end?: string; // omit for "Present"
};

export type Role = {
	role: string;
	type: ExperienceType;
	arrangement: ExperienceArrangement;
	date: ExperienceDate;
	summary: string;
	skills: string[];
};

export type Company = {
	company: string;
	location: string;
	roles: Role[];
};
