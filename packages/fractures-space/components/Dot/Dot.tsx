import React from "react";
import styled from "styled-components";
import type { DotProps } from "./Dot.types";

const DotMarkup: React.FC<DotProps> = (props) => (
	<svg
		width="100%"
		height="100%"
		className={props.className}
		viewBox="0 0 20 20"
	>
		<circle fill="var(--purple-500)" cx={10} cy={10} r={10} />
	</svg>
);

const Dot = styled(DotMarkup)`
	height: ${(props) => props.size}px;
	min-width: ${(props) => props.size}px;
	max-width: ${(props) => props.size}px;
	width: ${(props) => props.size}px;
`;

export default Dot;
