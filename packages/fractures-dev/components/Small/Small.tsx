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

	code {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-tiny);

		color: var(--purple-500);
	}

	code:after {
		content: "\`";
		color: var(--gray-300);
	}

	code:before {
		content: "\`";
		color: var(--gray-300);
	}
`;

export default Small;
