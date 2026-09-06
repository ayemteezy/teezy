import { Badge } from "@/components/ui/badge";
import type { StackItem } from "@/constants/stack";

interface StackItemProps {
	data: StackItem;
}

export const StackItemBadge = ({ data }: StackItemProps) => {
	return (
		<Badge variant="outline" className="px-2.5 py-3.5 text-muted-foreground">
			{data.name}
		</Badge>
	);
};
