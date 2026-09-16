import { RESOURCES } from "@/constants/resources";
import { ResourceItem } from "./resource-item";

export const Resources = () => {
	return (
		<div className="space-y-12">
			{RESOURCES.map((item) => (
				<div key={item.category} className="space-y-3">
					<h2 className="font-medium text-muted-foreground/60 text-xs uppercase tracking-wider">
						{item.category}
					</h2>

					<div className="grid grid-cols-1 gap-2 md:grid-cols-2">
						{item.resources.map((resource) => (
							<ResourceItem key={resource.name} data={resource} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
