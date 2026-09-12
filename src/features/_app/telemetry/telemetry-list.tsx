import type { GitHubLanguage } from "@/data/github";
import { cn } from "@/lib/utils";
import { TelemetryItem } from "./telemetry-item";

interface TelemetryListProps {
	data: GitHubLanguage[];
	isLoading: boolean;
	error: Error | null;
}

export const TelemetryList = ({
	data,
	error,
	isLoading,
}: TelemetryListProps) => {
	const desktopCols = Math.min(data.length, 4);

	if (error) {
		return (
			<div className="flex justify-center">
				<p className="font-mono text-muted-foreground text-xs uppercase">
					{error.message}
				</p>
			</div>
		);
	}

	if (isLoading) {
		return <TelemetrySkeleton />;
	}

	if (data.length === 0) {
		return (
			<div className="flex justify-center">
				<p className="font-mono text-muted-foreground text-xs uppercase">
					No Activity Found.
				</p>
			</div>
		);
	}

	return (
		<div>
			<div
				className="grid grid-cols-2 border-border border-y sm:grid-cols-[repeat(var(--desktop-cols),minmax(0,1fr))]"
				style={
					{
						"--desktop-cols": desktopCols,
					} as React.CSSProperties
				}
			>
				{data.map((lang, index) => (
					<TelemetryItem
						key={lang.name}
						name={lang.name}
						percent={lang.percent}
						index={index}
					/>
				))}
			</div>

			<div className="pt-4 font-mono text-[0.65625rem] text-muted-foreground">
				tracking activity across github repositories
			</div>
		</div>
	);
};

const TelemetrySkeleton = () => {
	return (
		<div>
			<div className="grid grid-cols-2 border-border border-y sm:grid-cols-4">
				{["a", "b", "c", "d"].map((key, index) => (
					<div
						key={key}
						className={cn(
							"animate-pulse border-border p-4",
							index % 2 !== 0 && "border-l",
							index < 2 && "border-b",
							"sm:border-b-0",
							"sm:not-first:border-l",
						)}
					>
						<div className="h-7 w-12 rounded bg-muted" />
						<div className="mt-2 h-3 w-16 rounded bg-muted" />
					</div>
				))}
			</div>

			<div className="pt-4">
				<div className="h-3 w-56 rounded bg-muted" />
			</div>
		</div>
	);
};
