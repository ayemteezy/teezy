import { queryOptions } from "@tanstack/react-query";
import { GITHUB } from "@/constants/configs/github.config";
import { getGitHubLanguages, getPinnedRepos } from "@/data/github";

export const githubLanguagesQuery = queryOptions({
	queryKey: ["github-languages", GITHUB.username],
	queryFn: () => getGitHubLanguages(),
	staleTime: 1000 * 60 * 30,
});

export const pinnedReposQuery = (limit?: number) => ({
	queryKey: ["pinned-repos", GITHUB.username, limit ?? "all"],
	queryFn: () =>
		getPinnedRepos({
			data: limit === undefined ? {} : { limit },
		}),
	staleTime: GITHUB.pinnedRepos.staleTimeMs,
});
