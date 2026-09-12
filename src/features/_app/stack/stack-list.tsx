import { useNavigate } from "@tanstack/react-router";
import { PlusIcon } from "lucide-react";
import { STACK } from "@/constants/stack";
import { Button } from "../../../components/ui/button";
import { StackItemBadge } from "./stack-item";

export const StackList = () => {
	const _navigate = useNavigate();

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
				onClick={() => _navigate({ to: "/stack" })}
				className="border border-dashed text-muted-foreground hover:border-primary hover:bg-transparent"
			>
				<PlusIcon className="mr-1 size-2.5" />
				more
			</Button>
		</div>
	);
};
