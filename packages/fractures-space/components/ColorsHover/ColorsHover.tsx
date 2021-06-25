import Small from "../Small";
import styled from "styled-components";
import type { ColorsHoverProps } from "./ColorsHover.types";

const ColorsHoverMarkup: React.FC<ColorsHoverProps> = (props) => {
	return (
		<div
			className={`${props.className} flex bg-purple-300 hover:bg-purple-100 radius-2 p-8 cursor-pointer`}
		>
			<Small className="bg-purple-900 purple-100 radius-1 px-3 py-1 mono">
				hover:purple-300
			</Small>
		</div>
	);
};

const ColorsHover = styled(ColorsHoverMarkup)`
	transition: background-color 120ms ease-in-out;
`;

export default ColorsHover;
