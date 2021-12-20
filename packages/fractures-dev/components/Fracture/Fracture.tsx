import classNames from "@sindresorhus/class-names";
import styled from "styled-components";
import Square from "../Square";
import type { FractureProps } from "./Fracture.types";

const FractureMarkup: React.FC<FractureProps> = (props) => {
	if (!props.rule) return null;

	const selector: string = props.rule.selectorNice || props.rule.selector;
	const fractureClasses: string = classNames(
		props.className,
		"inline-flex p-2 radius-1 tiny mono nowrap",
		{
			[`bg-${props.colorScale || "gray"}-${props.colorTint ?? 100}`]:
				props.colorScale || props.colorTint,
			[`gray-0`]: props.colorTint >= 500,
		}
	);

	const renderDot: React.ReactNode = (
		<Square colorScale="purple" colorTone={700} isRounded={true} size={4} />
	);

	return (
		<div className="inline-flex flex-gap-1">
			<code className={fractureClasses}>
				<span className="gray-300 unselectable">.</span>
				{selector}
			</code>
			{props.rule.hasBreakpoints && renderDot}
		</div>
	);
};

const Fracture: React.FC<FractureProps> = styled(FractureMarkup)`
	transition: background-color 60ms ease-in-out;
`;

export default Fracture;
