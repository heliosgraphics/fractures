import styled from "styled-components";
import type { TinyProps } from "./Tiny.types";
import type React from "react";

const TinyMarkup: React.FC<TinyProps> = (props) => {
	return <small className={`${props.className} tiny`}>{props.children}</small>;
};

const Tiny: React.FC<TinyProps> = styled(TinyMarkup)`
	a {
		color: var(--blue-500);

		font-weight: var(--font-weight-bold);
	}

	a:hover {
		color: var(--blue-900);
	}
`;

export default Tiny;
