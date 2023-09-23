import type { ContainerProps } from "./Container.types";

const Container: React.FC<ContainerProps> = (props) => (
	<div
		className={`overflow-hidden mx-auto wpmax-100 ${props.className}`}
		style={{ width: props.isWide ? "1280px" : "960px" }}
	>
		{props.children}
	</div>
);

export default Container;
