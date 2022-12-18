import React from "react";
import type { SquareProps } from "./Square.types";

const Square: React.FC<SquareProps> = ({
	size,
	colorTone,
	colorScale,
	isRounded,
}) => (
	<svg
		width="100%"
		height="100%"
		style={{
			height: `${size}px`,
			minWidth: `${size}px`,
			maxWidth: `${size}px`,
			width: `${size}px`,
		}}
		viewBox="0 0 20 20"
	>
		<rect
			fill={`var(--${colorScale || "purple"}-${colorTone ?? 500})`}
			width={20}
			height={20}
			rx={isRounded ? 4 : 0}
		/>
	</svg>
);

export default Square;
