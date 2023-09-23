import React from "react";
import type { DotProps } from "./Dot.types";

const Dot: React.FC<DotProps> = ({ size }) => (
	<svg
		width="100%"
		height="100%"
		style={{
			height: `${size}px`,
			maxWidth: `${size}px`,
			minWidth: `${size}px`,
			width: `${size}px`,
		}}
		viewBox="0 0 20 20"
	>
		<circle fill="var(--purple-500)" cx={10} cy={10} r={10} />
	</svg>
);

export default Dot;
