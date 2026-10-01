interface TranslucentBoxProps {
	size?: number;
	className?: string;
}

const TranslucentBox = ({
	size = 300,
	className = "",
}: TranslucentBoxProps) => {
	return (
		<svg
			viewBox="0 0 400 300"
			width={size}
			height={size * 0.75}
			className={className}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<defs>
				{/* Subtle gray panels */}
				<linearGradient id="box-panel" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#ffffff" stopOpacity="0.11" />
					<stop offset="100%" stopColor="#ffffff" stopOpacity="0.07" />
				</linearGradient>

				{/* Dark body */}
				<linearGradient id="box-body" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#ffffff" stopOpacity="0.09" />
					<stop offset="100%" stopColor="#ffffff" stopOpacity="0.045" />
				</linearGradient>
			</defs>

			{/* Back flaps */}
			<polygon
				points="105,70 75,70 30,52 70,32 105,50"
				fill="url(#box-panel)"
				stroke="#ffffff"
				strokeOpacity="0.10"
			/>

			<polygon
				points="295,70 325,70 372,52 335,32 295,50"
				fill="url(#box-panel)"
				stroke="#ffffff"
				strokeOpacity="0.10"
			/>

			{/* Main box */}
			<polygon
				points="75,70 325,70 325,220 75,220"
				fill="url(#box-body)"
				stroke="#ffffff"
				strokeOpacity="0.08"
			/>

			{/* Inner top opening */}
			<polygon
				points="105,50 295,50 325,70 75,70"
				fill="url(#box-panel)"
				stroke="#ffffff"
				strokeOpacity="0.12"
			/>

			{/* Front flap */}
			<polygon
				points="75,70 30,120 370,120 325,70"
				fill="url(#box-panel)"
				stroke="#fff"
				strokeOpacity="0.18"
			/>

			{/* Front face */}
			<rect
				x="75"
				y="70"
				width="250"
				height="150"
				fill="url(#box-body)"
				stroke="#fff"
				strokeOpacity="0.14"
			/>
		</svg>
	);
};

export default TranslucentBox;
