import type { ButtonProps } from "./Button.types";
import type React from "react";
import classNames from "@sindresorhus/class-names";
import styled from "styled-components";

const ButtonMarkup: React.FC<ButtonProps> = (props) => {
	// prettier-ignore
	const typeClasses: string = classNames(props.className, {
		["fr-button--secondary bg-purple-300 purple-800"]: props.type === "secondary",
		["fr-button--primary bg-purple-800 gray-0"]: props.type === "primary",
	});

	return (
		<div
			className={`${props.className} inline-flex p-6 radius-2 flex-ycenter unselectable relative flex-gap-1 bold ${typeClasses}`}
		>
			{props.children}
		</div>
	);
};

const Button = styled(ButtonMarkup)`
	&.fr-button--secondary {
		border: 1px solid var(--gray-300);
		background-color: var(--gray-0);
	}
`;

export default Button;
