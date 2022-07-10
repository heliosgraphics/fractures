import styled from "styled-components";
import type { h0Props } from "./H0.types";
import type React from "react";

const H0Markup: React.FC<h0Props> = (props) => {
	return <h1 className={props.className}>{props.children}</h1>;
};

const H0: React.FC<h0Props> = styled(H0Markup)`
	color: var(--purple-800);

	font-size: 72px;
	font-weight: 900;
	line-height: 70px;
	word-break: break-word;

	mark {
		background-color: transparent;

		color: inherit;
	}

	@media (max-width: 864px) {
		font-size: 56px;
		line-height: 64px;
	}
`;

export default H0;
