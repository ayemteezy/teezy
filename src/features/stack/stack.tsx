import { Badge } from "@/components/ui/badge";
import { STACK } from "@/constants/stack";

export const Stack = () => {
	return (
		<div className="space-y-12 pb-12">
			{STACK.map((category) => (
				<section
					key={category.label}
					className="grid gap-4 sm:grid-cols-[120px_1fr] sm:gap-8"
				>
					<h2 className="pt-1 font-mono text-muted-foreground/60 text-xs uppercase">
						{category.label}
					</h2>

					<div className="flex flex-wrap gap-2">
						{category.stack.map((item) => (
							<Badge
								key={item.name}
								variant="outline"
								className="h-9 cursor-pointer rounded-sm px-3 font-mono font-normal text-muted-foreground text-xs transition-colors hover:bg-muted"
							>
								{item.name}
							</Badge>
						))}
					</div>
				</section>
			))}
		</div>
	);
};
