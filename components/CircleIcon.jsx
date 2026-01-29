const CircleOutline = ({ className = '', size = 500, strokeWidth = 20 }) => {
	// Calculate radius so the stroke fits inside the box
	const radius = (size - strokeWidth) / 2;

	return (
		<svg
			className={className}
			width={size}
			height={size}
			viewBox={`0 0 ${size} ${size}`}
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={radius}
				fill='none'
				stroke='currentColor'
				strokeWidth={strokeWidth}
			/>
		</svg>
	);
};

export default CircleOutline;
