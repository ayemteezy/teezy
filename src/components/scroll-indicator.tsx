"use client";

import { motion as m } from "motion/react";
import ScrollLink from "./common/scroll-link";
export const ScrollIndicator = () => {
	return (
		<>
			<ScrollLink id="home">
				<m.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className="flex justify-center"
					style={{ cursor: "pointer" }}
				>
					<div className="flex flex-col items-center">
						<span className="text-xs  text-muted-foreground mb-1">
							Scroll Down
						</span>
						<div className="lg:w-5 w-4 lg:h-8 h-6 border-2 border-white rounded-full flex justify-center p-1 backdrop-blur-sm">
							<m.div
								animate={{
									y: [0, 10, 0],
								}}
								transition={{
									repeat: Number.POSITIVE_INFINITY,
									duration: 1.5,
								}}
								className="lg:w-1 w-0.75 lg:h-1 h-0.75 bg-white rounded-full"
							/>
						</div>
					</div>
				</m.div>
			</ScrollLink>
		</>
	);
};
