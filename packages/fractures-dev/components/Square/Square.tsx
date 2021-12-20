import React from "react";
import styled from "styled-components";
import type { SquareProps } from "./Square.types";

const SquareMarkup: React.FC<SquareProps> = (props) => (
	<svg
		width="100%"
		height="100%"
		className={props.className}
		viewBox="0 0 20 20"
	>
		<rect
			fill={`var(--${props.colorScale || "purple"}-${props.colorTone ?? 500})`}
			width={20}
			height={20}
			rx={props.isRounded ? 4 : 0}
		/>
	</svg>
);

const Square = styled(SquareMarkup)`
	height: ${(props) => props.size}px;
	min-width: ${(props) => props.size}px;
	max-width: ${(props) => props.size}px;
	width: ${(props) => props.size}px;
`;

export default Square;
