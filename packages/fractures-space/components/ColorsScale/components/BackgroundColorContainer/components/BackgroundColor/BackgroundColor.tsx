import Fracture from "../../../../../Fracture";
import type { BackgroundColorProps } from "./BackgroundColor.types";

const BackgroundColor: React.FC<BackgroundColorProps> = (props) => {
	const bgClass: string = `
		p-4
		w-100
		grow-4

		${props.color}-700
		bg-${props.color}-${props.tone}`;

	return (
		<div className={bgClass}>
			<Fracture
				class={`bg-${props.color}-${props.tone}`}
				colorScale={props.color}
			/>
		</div>
	);
};

export default BackgroundColor;
