import Small from "../Small";
import styled from "styled-components";
import type { ColorsHoverProps } from "./ColorsHover.types";

const ColorsHoverMarkup: React.FC<ColorsHoverProps> = (props) => {
	return (
		<div
			className={`${props.className} flex bg-gray-100 hover:bg-gray-200 radius-2 p-8 cursor-pointer`}
		>
			<Small className="bg-gray-900 gray-100 radius-1 px-3 py-1 mono">
				hover:gray-300
			</Small>
		</div>
	);
};

const ColorsHover = styled(ColorsHoverMarkup)`
	transition: background-color 120ms ease-in-out;
`;

export default ColorsHover;
