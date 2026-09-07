import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { StackList } from "./stack-list";

export const Stack = () => {
	const _navigate = useNavigate();

	return (
		<div className="space-y-6">
			<SectionHeader
				section={`01 \u2014 stack`}
				buttonLabel="view all"
				onClick={() => _navigate({ to: "/stack" })}
			/>
			<StackList />
		</div>
	);
};
