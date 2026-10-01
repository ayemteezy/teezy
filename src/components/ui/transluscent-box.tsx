interface TranslucentBoxProps {
	size?: number;
	className?: string;
}

const TranslucentBox = ({
	size = 300,
	className = "",
}: TranslucentBoxProps) => {
	const viewBoxWidth = 450;
	const viewBoxHeight = 181;

	return (
		<svg
			viewBox="0 0 450 181"
			width={size}
			height={size * (viewBoxHeight / viewBoxWidth)}
			className={`text-neutral-600 ${className}`}
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<defs>
				{/* Rear flaps */}
				<linearGradient id="box-rear-flap" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="currentColor" stopOpacity="0.48" />
					<stop offset="100%" stopColor="currentColor" stopOpacity="0.32" />
				</linearGradient>

				{/* Front flap */}
				<linearGradient id="box-front-flap" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
					<stop offset="100%" stopColor="currentColor" stopOpacity="0.38" />
				</linearGradient>

				{/* Main box */}
				<linearGradient id="box-body" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="#555557" stopOpacity="0.48" />
					<stop offset="55%" stopColor="#353537" stopOpacity="0.38" />
					<stop offset="100%" stopColor="#1f1f21" stopOpacity="0.24" />
				</linearGradient>

				{/* Inside opening */}
				<linearGradient id="box-opening" x1="0" y1="0" x2="0" y2="1">
					<stop offset="0%" stopColor="currentColor" stopOpacity="0.52" />
					<stop offset="100%" stopColor="currentColor" stopOpacity="0.38" />
				</linearGradient>
			</defs>

			{/* Back left flap */}
			<path
				d="
          M110 53
          L80 53
          L34 31
          Q29 28 34 24
          L57 13
          Q62 11 67 14
          L110 37
          Z
        "
				fill="url(#box-rear-flap)"
				stroke="currentColor"
				strokeOpacity="0.28"
				strokeLinejoin="round"
			/>

			{/* Back right flap */}
			<path
				d="
          M340 53
          L370 53
          L416 31
          Q421 28 416 24
          L393 13
          Q388 11 383 14
          L340 37
          Z
        "
				fill="url(#box-rear-flap)"
				stroke="currentColor"
				strokeOpacity="0.28"
				strokeLinejoin="round"
			/>

			{/* Main box */}
			<rect
				x="80"
				y="53"
				width="290"
				height="150"
				fill="url(#box-body)"
				stroke="#777779"
				strokeOpacity="0.22"
			/>

			{/* Inside opening */}
			<path
				d="
          M110 31
          H340
          L370 53
          H80
          Z
        "
				fill="url(#box-opening)"
				stroke="currentColor"
				strokeOpacity="0.28"
				strokeLinejoin="round"
			/>

			{/* Front flap — in front of the box */}
			<path
				d="
          M80 53
          L46 112
          Q43 117 48 121
          H402
          Q407 117 404 112
          L370 53
          Z
        "
				fill="url(#box-front-flap)"
				stroke="currentColor"
				strokeOpacity="0.30"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default TranslucentBox;
