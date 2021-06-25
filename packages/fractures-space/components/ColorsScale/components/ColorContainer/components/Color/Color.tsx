import Fracture from "../../../../../Fracture";
import type { ColorProps } from "./Color.types";

const Color: React.FC<ColorProps> = (props) => {
	const colorClass: string = `
		p-4
		w-100
		grow-4
		flex flex-column flex-gap-4

		bg-${props.color}-0
		`;

	return (
		<div
			className={colorClass}
			style={{
				borderLeft: `4px solid var(--${props.color}-${props.tone})`,
			}}
		>
			<Fracture
				class={`${props.color}-${props.tone}`}
				colorScale={props.color}
			/>
			<small className={`small ${props.color}-${props.tone}`}>
				{props.color.charAt(0).toUpperCase()}
				{props.color.substring(1, props.color.length)}
				{` `}
				{props.tone}
			</small>
		</div>
	);
};

export default Color;
