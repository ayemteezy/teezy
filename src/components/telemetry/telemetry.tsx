import { useQuery } from "@tanstack/react-query";
import { MoveUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GITHUB } from "@/constants/configs/github.config";
import { getGitHubLanguages } from "@/data/github";
import { cn } from "@/lib/utils";

export const Telemetry = () => {
	const { data } = useQuery({
		queryKey: ["github-languages", GITHUB.username],
		queryFn: () => getGitHubLanguages(),
		staleTime: 1000 * 60 * 30,
	});

	const languages = data ?? [];

	if (languages.length === 0) return null;

	const desktopCols = Math.min(languages.length, 4);
	return (
		<div className="space-y-6">
			<SectionHeader
				section={`06 — telemetry`}
				buttonLabel={`@${GITHUB.username}`}
				icon={MoveUpRightIcon}
				onClick={() =>
					window.open(
						`https://github.com/${GITHUB.username}`,
						"_blank",
						"noopener,noreferrer",
					)
				}
			/>
			<div>
				<div
					className="grid grid-cols-2 border-border border-y sm:grid-cols-[repeat(var(--desktop-cols),minmax(0,1fr))]"
					style={
						{
							"--desktop-cols": desktopCols,
						} as React.CSSProperties
					}
				>
					{languages.map((lang, index) => (
						<div
							key={lang.name}
							className={cn(
								"cursor-pointer border-border p-4 transition-colors duration-300 ease-in-out hover:bg-accent",
								index % 2 !== 0 && "border-l",
								index < 2 && "border-b",
								"sm:border-b-0",
								"sm:not-first:border-l",
							)}
						>
							<span className="font-pixel text-2xl text-foreground">
								{lang.percent}%
							</span>

							<div className="mt-1.5 font-mono text-[0.65625rem] text-muted-foreground uppercase">
								{lang.name}
							</div>
						</div>
					))}
				</div>

				<div className="pt-4 font-mono text-[0.65625rem] text-muted-foreground">
					tracking activity across github repositories
				</div>
			</div>
		</div>
	);
};
