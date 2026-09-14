import { CERTIFICATIONS } from "@/constants/certifications";
import { CertificationItem } from "./certification-item";

export const Certifications = () => {
	return (
		<div className="mb-12">
			{CERTIFICATIONS.map((category) => (
				<div key={category.name} className="space-y-4">
					<h2 className="font-medium text-muted-foreground/60 text-xs uppercase">
						{category.name}
					</h2>
					<div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
						{category.items.map((cert) => (
							<CertificationItem key={cert.url} data={cert} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};
