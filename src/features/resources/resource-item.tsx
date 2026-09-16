import { Link } from "@tanstack/react-router";
import { ArrowUpRightIcon } from "lucide-react";
import type { Resource } from "@/types/resources";

interface ResourceItemProps {
	data: Resource;
}

export const ResourceItem = ({ data }: ResourceItemProps) => {
	return (
		<Link
			to={data.url}
			className="group relative rounded-md p-3 hover:bg-accent"
		>
			<h4 className="font-medium font-sans text-sm leading-snug">
				{data.name}
			</h4>
			<p className="mt-1 font-sans text-muted-foreground text-xs">
				{data.description}
			</p>
			<ArrowUpRightIcon className="absolute top-3 right-3 size-3.5 text-muted-foreground/60 transition-all duration-300 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
		</Link>
	);
};
