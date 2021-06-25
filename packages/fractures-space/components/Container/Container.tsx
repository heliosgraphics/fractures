import styled from "styled-components";
import type { ContainerProps } from "./Container.types";

const ContainerMarkup: React.FC<ContainerProps> = (props) => (
	<div className={`overflow-hidden mx-auto wpmax-100 ${props.className}`}>
		{props.children}
	</div>
);

const Container: React.FC<ContainerProps> = styled(ContainerMarkup)`
	width: ${(props) => (props.isWide ? "1280px" : "960px")};
`;

export default Container;
