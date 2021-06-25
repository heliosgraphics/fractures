import BackgroundColor from "./components/BackgroundColor";
import type { ColorScaleProps } from "../../ColorScale.types";

const BackgroundColorContainer: React.FC<ColorScaleProps> = (props) => (
	<div className="flex flex-column flex-gap-8">
		<h4 className="h4 normal">{props.color}</h4>
		<div className="flex flex-column">
			{props.tones.map((tone, key) => (
				<BackgroundColor key={key} tone={tone} color={props.color} />
			))}
		</div>
	</div>
);

export default BackgroundColorContainer;
