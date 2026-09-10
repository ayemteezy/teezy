import type { LucideIcon } from "lucide-react";
import { MoveRightIcon } from "lucide-react";
import { Button } from "./button";

interface SectionHeaderProps {
	section: string;
	buttonLabel: string;
	onClick: () => void;
	icon?: LucideIcon;
}

export const SectionHeader = ({
	section,
	buttonLabel,
	onClick,
	icon: Icon = MoveRightIcon,
}: SectionHeaderProps) => {
	return (
		<div className="flex items-center justify-between text-muted-foreground">
			<h2 className="font-pixel text-xs uppercase">{section}</h2>
			<Button
				className="font-mono text-[0.625rem] uppercase tracking-wider"
				size="xs"
				variant="link"
				onClick={onClick}
			>
				{buttonLabel} <Icon className="ml-1 size-2" />
			</Button>
		</div>
	);
};
