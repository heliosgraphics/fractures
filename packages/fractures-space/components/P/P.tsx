import styled from "styled-components";
import type { PProps } from "./P.types";
import type React from "react";

const PMarkup: React.FC<PProps> = (props) => {
	return (
		<p className={`${props.className} sans p gray-900`}>{props.children}</p>
	);
};

const P: React.FC<PProps> = styled(PMarkup)`
	a {
		color: var(--blue-500);

		font-weight: var(--font-weight-bold);
	}

	a:hover {
		color: var(--blue-900);
	}

	code {
		font-family: var(--font-family-mono);
		font-size: var(--font-size-small);

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

export default P;
