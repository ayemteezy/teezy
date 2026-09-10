import { useNavigate } from "@tanstack/react-router";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialList } from "./testimonial-list";

export const Testimonials = () => {
	const navigate = useNavigate();

	return (
		<div className="space-y-6">
			<SectionHeader
				section={`05 \u2014 testimonials`}
				buttonLabel="all testimonials"
				onClick={() => navigate({ to: "/testimonials" })}
			/>
			<TestimonialList />
		</div>
	);
};
