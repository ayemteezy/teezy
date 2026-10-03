import { cn } from "cn";
import StackIcon from "tech-stack-icons";
import { USES_PREVIEW } from "@/constants/uses";
import { useTheme } from "@/providers/theme-provider";

export const UsesPreview = () => {
	const { theme } = useTheme();
	return (
		<div className="flex h-[75%] items-center justify-center gap-3">
			{USES_PREVIEW.map((item, index) => (
				<div
					key={item}
					className={cn(
						"rounded-2xl border-2 p-2 transition-all duration-500 ease-in-out",
						index === 2 &&
							"mx-1 scale-115 group-hover:-translate-y-2 group-hover:border-blue-400",
						(index === 1 || index === 3) &&
							"delay-200 group-hover:-translate-y-2 group-hover:border-blue-400",
						(index === 0 || index === 4) &&
							"delay-400 group-hover:-translate-y-2 group-hover:border-blue-400",
					)}
				>
					<div className="rounded-xl border bg-accent/50 p-4">
						<StackIcon
							name={item}
							variant={theme === "dark" ? "dark" : "light"}
							className="size-10"
						/>
					</div>
				</div>
			))}
		</div>
	);
};
