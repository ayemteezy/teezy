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
    company: "Self-employed",
    location: "Remote",
    roles: [
      {
        role: "Freelance Web Developer",
        type: "freelance",
        date: { start: "2026-01" },
        summary: "Design and build web applications for clients using Next.js and React, handling everything from UI implementation to deployment.",
        skills: [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Client Communication",
        ],
      },
    ],
  },
  {
    company: "University of Caloocan City",
    location: "Onsite",
    roles: [
      {
        role: "Student Mentor",
        type: "internship",
        date: { start: "2025-01", end: "2025-04" },
        summary: "Mentored 3rd-year IT students on capstone projects — guiding system design, architecture, debugging, and full-stack best practices, plus documentation and presentation strategies.",
        skills: [
          "Mentoring",
          "System Design",
          "Software Architecture",
          "Debugging",
          "Full-Stack Development",
          "Project Management",
          "Technical Documentation",
        ],
      },
    ],
  },
  {
    company: "Digital Benefits Pte. Ltd.",
    location: "Remote",
    roles: [
      {
        role: "Multimedia & Web Development",
        type: "internship",
        date: { start: "2024-08", end: "2024-09" },
        summary: "QA-tested a crypto platform and game, surfacing UI/UX issues and working with developers and designers to improve responsiveness, accessibility, and overall user experience across browsers and devices.",
        skills: [
          "QA Testing",
          "Bug Tracking",
          "Cross-Browser Testing",
          "UI/UX Design",
          "Accessibility",
          "Responsive Design",
          "Cross-functional Collaboration",
          "User Feedback Analysis",
        ],
      },
    ],
  },
];