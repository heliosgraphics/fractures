import styled from "styled-components";
import type { SmallProps } from "./Small.types";
import type React from "react";

const SmallMarkup: React.FC<SmallProps> = (props) => {
	return <p className={`${props.className} sans small`}>{props.children}</p>;
};

const Small: React.FC<SmallProps> = styled(SmallMarkup)`
	a {
		color: var(--blue-500);

		font-weight: var(--font-weight-bold);
	}

	a:hover {
		color: var(--blue-900);
	}
`;

export default Small;
