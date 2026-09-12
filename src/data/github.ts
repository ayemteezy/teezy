import { createServerFn } from "@tanstack/react-start";
import { GITHUB } from "@/constants/configs/github.config";
import type { PinnedRepo } from "@/types/github";

export const getPinnedRepos = createServerFn({ method: "GET" }).handler(
	async (): Promise<PinnedRepo[]> => {
		const token = process.env.VITE_GITHUB_TOKEN || process.env.GITHUB_TOKEN;

		if (!token) {
			throw new Error(
				"Missing GitHub token — set VITE_GITHUB_TOKEN or GITHUB_TOKEN in .env",
			);
		}

		const _response = await fetch(GITHUB.api.graphql, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
          query {
            user(login: "${GITHUB.username}") {
              pinnedItems(first: ${GITHUB.pinnedRepos.limit}, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    id
                    name
                    description
                    url
                    homepageUrl
                    stargazerCount
                    forkCount
                    languages(first: 100, orderBy: {field: SIZE, direction: DESC}) {
                      nodes {
                        name
                      }
                    }
                    repositoryTopics(first: 5) {
                      nodes {
                        topic {
                          name
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
			}),
		});

		if (!_response.ok) {
			throw new Error(`GitHub API responded with ${_response.status}`);
		}

		const _json = await _response.json();

		if (_json.errors) {
			throw new Error(_json.errors[0]?.message ?? "GitHub GraphQL error");
		}

		if (!_json.data?.user) {
			throw new Error(`No GitHub user found for "${GITHUB.username}"`);
		}

		return _json.data.user.pinnedItems.nodes;
	},
);

// Defining types based on the api.jogruber.de schema
interface ContributionDay {
	date: string;
	count: number;
	level: number;
}

interface ApiResponse {
	total: Record<string, number>;
	contributions: ContributionDay[];
}

export const getCachedContributions = createServerFn({ method: "GET" }).handler(
	async () => {
		const url = new URL(
			`/v4/${GITHUB.username}`,
			"https://github-contributions-api.jogruber.de",
		);

		const response = await fetch(url, {
			headers: {
				"Cache-Control":
					"public, max-age=86400, s-maxage=86400, stale-while-revalidate=60",
			},
		});

		if (!response.ok) {
			throw new Error(
				`Contributions API responded with status ${response.status}`,
			);
		}

		const data = (await response.json()) as ApiResponse;
		const currentYear = new Date().getFullYear().toString();
		const total = data.total[currentYear] ?? 0;

		return {
			contributions: data.contributions,
			total,
		};
	},
);

export type GitHubLanguage = {
	name: string;
	percent: number;
};

export const getGitHubLanguages = createServerFn({ method: "GET" }).handler(
	async (): Promise<GitHubLanguage[]> => {
		const username = GITHUB.username;

		if (!username) {
			throw new Error("Missing GitHub username.");
		}

		const token = process.env.GITHUB_TOKEN;

		const headers: HeadersInit = {
			"User-Agent": "TanStack-Start-Portfolio",
			Accept: "application/vnd.github+json",
		};

		// Authentication is optional for public repositories.
		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

		// Step 1: Get the user's repositories
		const reposResponse = await fetch(
			`https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=owner`,
			{ headers },
		);

		if (!reposResponse.ok) {
			throw new Error(
				`GitHub API returned status code ${reposResponse.status}: ${await reposResponse.text()}`,
			);
		}

		const repos = (await reposResponse.json()) as Array<{
			languages_url: string;
			fork: boolean;
			archived: boolean;
		}>;

		// Step 2: Get language statistics for each repository
		const languageResults = await Promise.all(
			repos
				.filter((repo) => !repo.fork && !repo.archived)
				.map(async (repo) => {
					try {
						const response = await fetch(repo.languages_url, {
							headers,
						});

						if (!response.ok) {
							return {};
						}

						return (await response.json()) as Record<string, number>;
					} catch {
						return {};
					}
				}),
		);

		// Step 3: Aggregate language bytes
		const languageMap: Record<string, number> = {};

		for (const languages of languageResults) {
			for (const [name, bytes] of Object.entries(languages)) {
				languageMap[name] = (languageMap[name] ?? 0) + bytes;
			}
		}

		// Step 4: Calculate total bytes
		const totalBytes = Object.values(languageMap).reduce(
			(total, bytes) => total + bytes,
			0,
		);

		if (totalBytes === 0) {
			return [];
		}

		// Step 5: Calculate percentages
		return Object.entries(languageMap)
			.map(([name, bytes]) => ({
				name,
				percent: Math.round((bytes / totalBytes) * 100),
			}))
			.filter((language) => language.percent > 0)
			.sort((a, b) => b.percent - a.percent)
			.slice(0, 4);
	},
);
