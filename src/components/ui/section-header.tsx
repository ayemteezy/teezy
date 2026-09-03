import { MoveRightIcon } from "lucide-react";
import { Button } from "./button";

interface SectionHeaderProps {
	index?: number;
	section: string;
	buttonLabel: string;
	onClick: () => void;
}

export const SectionHeader = ({
	index,
	section,
	buttonLabel,
	onClick,
}: SectionHeaderProps) => {
	return (
		<div className="itecems-center flex justify-between text-muted-foreground">
			<h2 className="font-pixel text-sm">
				{index && `0${index} — `}
				{section}
			</h2>
			<Button
				className="font-mono text-[0.625rem] uppercase tracking-wider"
				size="xs"
				variant="link"
				onClick={onClick}
			>
				{buttonLabel} <MoveRightIcon className="ml-2 size-2" />
			</Button>
		</div>
	);
};
