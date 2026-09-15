import type { Company } from "@/types/experience";

export const EXPERIENCE: Company[] = [
	{
		company: "Self-employed",
		location: "Remote",
		type: "freelance",
		roles: [
			{
				role: "Web Developer",
				arrangement: "remote",
				date: {
					start: "2026-01",
				},
				summary:
					"Design and build web applications for clients using Next.js and React, handling everything from UI implementation to deployment.",
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
		location: "Caloocan City, Philippines",
		type: "part-time",
		roles: [
			{
				role: "Student Mentor",
				arrangement: "onsite",
				date: {
					start: "2025-01",
					end: "2025-04",
				},
				summary:
					"Mentored 3rd-year IT students on capstone projects, guiding system design, debugging, documentation, presentation, and full-stack development practices.",
				skills: [
					"Mentoring",
					"System Design",
					"Debugging",
					"Full-Stack Development",
					"Technical Documentation",
					"Problem Solving",
				],
			},
		],
	},

	{
		company: "Digital Benefits Pte. Ltd.",
		location: "Remote",
		type: "internship",
		roles: [
			{
				role: "Multimedia & Web Development Intern",
				arrangement: "remote",
				date: {
					start: "2024-08",
					end: "2024-09",
				},
				summary:
					"QA-tested a crypto platform and game, identifying UI/UX issues and collaborating with developers and designers to improve responsiveness, accessibility, and overall user experience.",
				skills: [
					"QA Testing",
					"Bug Tracking",
					"Cross-Browser Testing",
					"UI/UX",
					"Accessibility",
					"Responsive Design",
					"Collaboration",
				],
			},
		],
	},
];
