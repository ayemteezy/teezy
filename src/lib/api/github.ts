"use server";

import { env } from "@/env.mjs";
import { Client, type IPinnedRepo } from "get-pinned-repos";
import type { Repo } from "@/types";

const GH_ACCESS_TOKEN = env.GH_ACCESS_TOKEN;
const GH_USERNAME = env.GH_USERNAME;

Client.setToken(GH_ACCESS_TOKEN);

export const getRepo = async (): Promise<Repo[] | { error: string }> => {
  try {
    const pinned: IPinnedRepo[] = await Client.getPinnedRepos(GH_USERNAME);

    const formattedPinned: Repo[] = pinned.map((repo) => ({
      ...repo,
      stargazerCount: Number(repo.stargazerCount),
    }));

    return formattedPinned;
  } catch (error) {
    console.error("Error fetching data:", error);
    return { error: "Failed fetching data" };
  }
};
