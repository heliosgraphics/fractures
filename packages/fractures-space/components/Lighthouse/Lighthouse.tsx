import styled from "styled-components";
import type { LightHouseProps } from "./Lighthouse.types";
import type React from "react";

const LighthouseMarkup: React.FC<LightHouseProps> = (props) => {
	return (
		<div className={`${props.className} mono green-900 radius-100 center`}>
			100
		</div>
	);
};

const Lighthouse: React.FC<LightHouseProps> = styled(LighthouseMarkup)`
	height: 64px;
	width: 64px;

	border: 6px solid var(--green-500);

	line-height: 52px;
`;

export default Lighthouse;
