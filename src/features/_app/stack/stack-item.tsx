import { Badge } from "@/components/ui/badge";
import type { StackItem } from "@/types/stack";

interface StackItemProps {
	data: StackItem;
}

export const StackItemBadge = ({ data }: StackItemProps) => {
	return (
		<Badge
			variant="outline"
			className="cursor-default px-2.5 py-3.5 text-muted-foreground hover:bg-accent"
		>
			{data.name}
		</Badge>
	);
};
