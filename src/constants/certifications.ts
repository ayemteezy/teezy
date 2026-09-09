export type Certification = {
	title: string;
	issuer: string;
	logo: string;
	year: string;
	url: string;
	skills: string[];
	pinned?: boolean;
};

export const CERTIFICATIONS: Certification[] = [
	{
		title: "Software Engineer",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/204ca4aa7e2c",
		skills: ["DATA STRUCTURES", "OOP"],
		pinned: true,
	},
	{
		title: "Frontend Developer (React)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/550b22bb0772",
		skills: ["REACT", "COMPONENT DESIGN"],
		pinned: true,
	},
	{
		title: "Software Engineer Intern",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/eaa5a59cd153",
		skills: ["ALGORITHMS", "DEBUGGING"],
	},
	{
		title: "JavaScript (Basic)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/8ac951f88a28",
		skills: ["JAVASCRIPT", "FUNDAMENTALS"],
	},
	{
		title: "JavaScript (Intermediate)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/e7f36785eea8",
		skills: ["CLOSURES", "ASYNC JS"],
	},
	{
		title: "Problem Solving (Basic)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/d5ca663cdc8f",
		skills: ["LOGIC", "ARRAYS"],
	},
	{
		title: "Problem Solving (Intermediate)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/aabf5fcb105e",
		skills: ["ALGORITHMS", "DYNAMIC PROGRAMMING"],
		pinned: true,
	},
	{
		title: "React (Basic)",
		issuer: "HackerRank",
		logo: "hackerrank.com",
		year: "2025",
		url: "https://www.hackerrank.com/certificates/e7b440ae1ab9",
		skills: ["REACT", "HOOKS"],
	},
];
