import { Image } from "@unpic/react";
import { MoveUpRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Certification } from "@/constants/certifications";
import { getLogoUrl } from "@/data/logo";

interface CertificationItemProps {
	data: Certification;
}

export const CertificationItem = ({ data }: CertificationItemProps) => {
	const logo = getLogoUrl(data.logo);

	return (
		<a
			href={data.url}
			target="_blank"
			rel="noopener noreferrer"
			className="group block h-full"
		>
			<Card className="flex h-full flex-col justify-between gap-0 rounded-lg p-0">
				<div className="space-y-1.5 p-4 pb-0">
					<div className="flex items-center gap-2">
						<Image
							src={logo}
							alt={data.issuer}
							layout="constrained"
							height={15}
							width={15}
							className="rounded-xs shadow"
						/>
						<span className="text-[0.59375rem] text-muted-foreground uppercase tracking-wide">
							{data.issuer}
						</span>
					</div>
					<h2 className="font-sans font-semibold text-sm leading-snug">
						{data.title}
					</h2>
					<div className="flex flex-wrap gap-1">
						{data.skills.map((skill) => (
							<Badge
								key={skill}
								variant="outline"
								className="h-3.5 rounded-xs px-1.5 text-[0.5rem] text-muted-foreground uppercase"
							>
								{skill}
							</Badge>
						))}
					</div>
				</div>
				<div className="px-4 py-3">
					<Separator />
					<div className="mt-2 flex items-center justify-between">
						<span className="text-[0.59375rem] text-muted-foreground">
							{data.year}
						</span>
						<span className="flex items-center gap-1 text-[0.59375rem] text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-primary">
							credentials <MoveUpRightIcon className="size-2" />
						</span>
					</div>
				</div>
			</Card>
		</a>
	);
};
