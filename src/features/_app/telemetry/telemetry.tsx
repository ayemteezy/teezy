import { useQuery } from "@tanstack/react-query";
import { MoveUpRightIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { GITHUB } from "@/constants/configs/github.config";
import { getGitHubLanguages } from "@/data/github";
import { TelemetryList } from "./telemetry-list";

export const Telemetry = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["github-languages", GITHUB.username],
		queryFn: () => getGitHubLanguages(),
		staleTime: 1000 * 60 * 30,
	});

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
			<TelemetryList
				data={data ? data : []}
				isLoading={isLoading}
				error={error}
			/>
		</div>
	);
};
