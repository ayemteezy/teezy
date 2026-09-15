export type ExperienceType =
	| "full-time"
	| "part-time"
	| "contract"
	| "freelance"
	| "internship";

export type ExperienceDate = {
	start: string; // "2025-01"
	end?: string; // omit for "Present"
};

export type Role = {
	role: string;
	type: ExperienceType;
	date: ExperienceDate;
	summary: string;
	skills: string[];

	/**
	 * Used when this role represents a promotion
	 * from another role at the same company.
	 */
	promotedFrom?: string;
};

export type Company = {
	company: string;
	location: string;

	/**
	 * Optional short identifier used inside
	 * the timeline marker.
	 */
	abbreviation?: string;

	roles: Role[];
};
