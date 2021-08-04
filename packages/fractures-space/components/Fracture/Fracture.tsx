import classNames from "@sindresorhus/class-names";
import styled from "styled-components";
import type { FractureProps } from "./Fracture.types";

const FractureMarkup: React.FC<FractureProps> = (props) => {
	const fractureClasses: string = classNames(
		props.className,
		"inline-flex p-2 radius-1 tiny mono nowrap",
		{
			[`bg-${props.colorScale || "gray"}-${props.colorTint || 100}`]:
				props.colorScale || props.colorTint,
			[`gray-0`]: props.colorTint >= 500,
		}
	);

	return (
		<div className="inline-flex flex-gap-4">
			<code className={fractureClasses}>
				<span className="gray-300 unselectable">.</span>
				{props.class}
			</code>
		</div>
	);
};

const Fracture: React.FC<FractureProps> = styled(FractureMarkup)`
	transition: background-color 60ms ease-in-out;
`;

export default Fracture;
