interface YearRailProps {
	year: number;
	isLast: boolean;
}

export const YearRail = ({ year, isLast }: YearRailProps) => {
	return (
		<div className="relative">
			<span className="relative z-10 bg-background py-2 font-medium font-sans text-muted-foreground/60 text-xs">
				{year}
			</span>

			{!isLast && (
				<span
					aria-hidden="true"
					className="absolute top-5 -bottom-12 left-1/4 w-px bg-border"
				/>
			)}
		</div>
	);
};
