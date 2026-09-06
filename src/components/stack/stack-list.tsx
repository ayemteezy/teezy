import { PlusIcon } from "lucide-react";
import { STACK } from "@/constants/stack";
import { Button } from "../ui/button";
import { StackItemBadge } from "./stack-item";

export const StackList = () => {
	const _pinnedStack = STACK.flatMap((category) =>
		category.stack.filter((item) => item.pinned),
	);

	return (
		<div className="flex flex-wrap gap-2">
			{_pinnedStack.map((_stack) => (
				<StackItemBadge key={_stack.name} data={_stack} />
			))}
			<Button
				variant="outline"
				size="sm"
				className="border border-dashed text-muted-foreground hover:border-primary hover:bg-transparent"
			>
				<PlusIcon className="mr-1 size-2.5" />
				more
			</Button>
		</div>
	);
};
