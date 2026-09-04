export const GITHUB = {
  username: "ayemteezy",

  api: {
    graphql: "https://api.github.com/graphql",
    rest: "https://api.github.com",
  },

  tokenEnvVar: "GITHUB_TOKEN",

  pinnedRepos: {
    limit: 6,
    staleTimeMs: 1000 * 60 * 60,
  },
} as const;