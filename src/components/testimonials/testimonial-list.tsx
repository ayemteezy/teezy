import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialItem } from "./testimonial-item";

export const TestimonialList = () => {
	const pinnedTestimonials = TESTIMONIALS.filter((t) => t.pinned);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-3">
			{pinnedTestimonials.map((testimonial) => (
				<TestimonialItem key={testimonial.name} data={testimonial} />
			))}
		</div>
	);
};
