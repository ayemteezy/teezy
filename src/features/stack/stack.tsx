import { Badge } from "@/components/ui/badge";
import { STACK } from "@/constants/stack";

export const Stack = () => {
	return (
		<div className="space-y-12 pb-12">
			{STACK.map((category) => (
				<div key={category.label} className="space-y-6">
					<h2 className="font-medium text-muted-foreground/60 text-xs uppercase">
						{category.label}
					</h2>
					<div className="flex flex-wrap gap-2">
						{category.stack.map((item) => (
							<Badge
								key={item.name}
								className="cursor-pointer rounded-md p-4 text-muted-foreground"
								variant="outline"
							>
								{item.name}
							</Badge>
						))}
					</div>
				</div>
			))}
		</div>
	);
};
