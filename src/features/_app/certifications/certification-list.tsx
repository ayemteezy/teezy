import {
	CERTIFICATIONS,
	type Certification,
	type CertificationCategory,
} from "@/constants/certifications";
import { CertificationItem } from "./certification-item";

export const CertificationList = () => {
	const allCertifications = CERTIFICATIONS.flatMap(
		(category: CertificationCategory) => category.items,
	);

	const pinnedCertifications = allCertifications.filter(
		(cert: Certification) => cert.pinned,
	);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
			{pinnedCertifications.map((cert: Certification) => (
				<div
					key={cert.url}
					className="min-h-45 cursor-pointer rounded-xl p-1 shadow-xl/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl/10"
				>
					<CertificationItem data={cert} />
				</div>
			))}
		</div>
	);
};
