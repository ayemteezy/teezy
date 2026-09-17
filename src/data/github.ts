import { createServerFn } from "@tanstack/react-start";
import { GITHUB } from "@/constants/configs/github.config";
import type {
	GetPortfolioReposInput,
	GitHubLanguage,
	GitHubPortfolioReposResponse,
	PortfolioRepo,
} from "@/types/github";

export const getPortfolioRepos = createServerFn({ method: "GET" })
	.validator((data: GetPortfolioReposInput) => data)
	.handler(async ({ data }): Promise<PortfolioRepo[]> => {
		const limit = data.limit ?? 100;

		const token = process.env.GITHUB_TOKEN;

		if (!token) {
			throw new Error("Missing GITHUB_TOKEN.");
		}

		const response = await fetch(GITHUB.api.graphql, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				query: `
          query PortfolioRepositories(
            $searchQuery: String!
            $limit: Int!
          ) {
            search(
              query: $searchQuery
              type: REPOSITORY
              first: $limit
            ) {
              nodes {
                ... on Repository {
                  id
                  name
                  description
                  url
                  homepageUrl
                  createdAt
                  languages(
                    first: 4
                    orderBy: {
                      field: SIZE
                      direction: DESC
                    }
                  ) {
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
        `,
				variables: {
					searchQuery: `user:${GITHUB.username} topic:portfolio fork:false archived:false`,
					limit,
				},
			}),
		});

		if (!response.ok) {
			throw new Error(`GitHub API responded with ${response.status}`);
		}

		const json = (await response.json()) as GitHubPortfolioReposResponse;

		if (json.errors?.length) {
			throw new Error(json.errors[0]?.message ?? "GitHub GraphQL error");
		}

		const repos = json.data?.search?.nodes ?? [];

		return repos.map((repo) => ({
			id: repo.id,
			name: repo.name,
			description: repo.description,
			url: repo.url,
			homepageUrl: repo.homepageUrl,
			createdAt: repo.createdAt,
			languages: repo.languages.nodes.map((language) => language.name),
			topics: repo.repositoryTopics.nodes.map(({ topic }) => topic.name),
		}));
	});

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

		if (token) {
			headers.Authorization = `Bearer ${token}`;
		}

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

		const languageMap: Record<string, number> = {};

		for (const languages of languageResults) {
			for (const [name, bytes] of Object.entries(languages)) {
				languageMap[name] = (languageMap[name] ?? 0) + bytes;
			}
		}

		const totalBytes = Object.values(languageMap).reduce(
			(total, bytes) => total + bytes,
			0,
		);

		if (totalBytes === 0) {
			return [];
		}

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
