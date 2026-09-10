import { CERTIFICATIONS } from "@/constants/certifications";
import { CertificationItem } from "./certification-item";

export const CertificationList = () => {
	const pinnedCertifications = CERTIFICATIONS.filter((cert) => cert.pinned);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
			{pinnedCertifications.map((cert) => (
				<div
					key={cert.url}
					className="cursor-pointer rounded-xl p-1 shadow-xl/5 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl/10"
				>
					<CertificationItem data={cert} />
				</div>
			))}
		</div>
	);
};
