import { GITHUB } from "@/constants/configs/github.config";
import { useCascadingImage } from "@/hooks/use-cascading-image";
import { useResolvedTheme } from "@/hooks/use-resolved-theme";

const IMAGE_EXTENSIONS = ["svg", "png", "jpg"] as const;

const repoAssetsBase = (repoName: string) =>
  `https://raw.githubusercontent.com/${GITHUB.username}/${repoName}/main/public/images`;

// Ordered: dark-variant (if applicable) across every extension, then the
// default logo across the same extensions.
const buildLogoCandidates = (repoName: string, isDark: boolean): string[] => {
  const base = repoAssetsBase(repoName);
  const darkCandidates = isDark
    ? IMAGE_EXTENSIONS.map((ext) => `${base}/logo-dark.${ext}`)
    : [];
  const defaultCandidates = IMAGE_EXTENSIONS.map((ext) => `${base}/logo.${ext}`);

  return [...darkCandidates, ...defaultCandidates];
};

export const useRepoLogo = (repoName: string) => {
  const theme = useResolvedTheme();
  const candidates = buildLogoCandidates(repoName, theme === "dark");

  return useCascadingImage(candidates);
};