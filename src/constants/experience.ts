export type ExperienceType = "full-time" | "part-time" | "contract" | "freelance" | "internship";

export type ExperienceDate = {
  start: string; // e.g. "2023-01"
  end?: string;  // omit for "Present"
};

export type Role = {
  role: string;
  type: ExperienceType;
  date: ExperienceDate;
  summary: string;
  skills: string[];
};

export type Company = {
  company: string;
  location: string;
  roles: Role[];
};

export const EXPERIENCE: Company[] = [
  {
    company: "Acme Inc",
    location: "Remote",
    roles: [
      {
        role: "Frontend Engineer",
        type: "full-time",
        date: { start: "2021-06", end: "2023-01" },
        summary: "Built core UI components and internal tooling.",
        skills: ["React", "JavaScript"],
      },
    ],
  },
];