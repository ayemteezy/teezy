import { TESTIMONIALS } from "@/constants/testimonials";
import { TestimonialItem } from "./testimonial-item";

export const Testimonials = () => {
	return (
		<>
			{/* Mobile */}
			<div className="flex flex-col gap-4 md:hidden">
				{TESTIMONIALS.map((testimonial) => (
					<TestimonialItem key={testimonial.name} data={testimonial} />
				))}
			</div>

			{/* Tablet */}
			<div className="hidden md:grid md:grid-cols-2 md:gap-4 xl:hidden">
				<div className="flex flex-col gap-4">
					{TESTIMONIALS.filter((_, index) => index % 2 === 0).map(
						(testimonial) => (
							<TestimonialItem key={testimonial.name} data={testimonial} />
						),
					)}
				</div>

				<div className="flex flex-col gap-4">
					{TESTIMONIALS.filter((_, index) => index % 2 === 1).map(
						(testimonial) => (
							<TestimonialItem key={testimonial.name} data={testimonial} />
						),
					)}
				</div>
			</div>

			{/* Desktop */}
			<div className="hidden xl:grid xl:grid-cols-3 xl:gap-4">
				{[0, 1, 2].map((column) => (
					<div key={column} className="flex flex-col gap-4">
						{TESTIMONIALS.filter((_, index) => index % 3 === column).map(
							(testimonial) => (
								<TestimonialItem key={testimonial.name} data={testimonial} />
							),
						)}
					</div>
				))}
			</div>
		</>
	);
};
