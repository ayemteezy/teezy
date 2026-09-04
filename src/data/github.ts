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