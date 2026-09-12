import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

interface ModalCardProps {
	title: string;
	description: string;
	date: number;
	featured?: boolean;
}

export const ModalCard = ({
	title,
	description,
	date,
	featured,
}: ModalCardProps) => {
	return (
		<Card className={cn("rounded-sm", featured && "dark")}>
			<CardHeader>
				<div className="flex items-center justify-between">
					<CardTitle className="font-medium font-sans text-sm leading-5">
						{title}
					</CardTitle>
					{featured ? (
						<Badge className="bg-foreground/20 text-[10px] text-foreground uppercase shadow">
							featured
						</Badge>
					) : (
						<span className="text-[10px] text-muted-foreground">{date}</span>
					)}
				</div>
				<CardDescription className="w-60 text-[12px] leading-5">
					{description}
				</CardDescription>
			</CardHeader>
		</Card>
	);
};
