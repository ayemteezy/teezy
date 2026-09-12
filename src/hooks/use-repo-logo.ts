import { GITHUB } from "@/constants/configs/github.config";
import { useCascadingImage } from "@/hooks/use-cascading-image";

const IMAGE_EXTENSIONS = ["svg", "png", "jpg"] as const;

const repoAssetsBase = (repoName: string) =>
	`https://raw.githubusercontent.com/${GITHUB.username}/${repoName}/main/public/images`;

const buildLogoCandidates = (repoName: string): string[] => {
	const base = repoAssetsBase(repoName);

	return IMAGE_EXTENSIONS.flatMap((ext) => [
		`${base}/logo.${ext}`,
		`${base}/logo-dark.${ext}`,
	]);
};

export const useRepoLogo = (repoName: string) => {
	const candidates = buildLogoCandidates(repoName);

	return useCascadingImage(candidates);
};
