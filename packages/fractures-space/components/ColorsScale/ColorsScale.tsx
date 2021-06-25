import BackgroundColorContainer from "./components/BackgroundColorContainer";
import ColorContainer from "./components/ColorContainer";
import type { ColorScaleProps } from "./ColorScale.types";

const ColorsScale: React.FC<ColorScaleProps> = (props) => {
	switch (props.mode) {
		case "color":
			return <ColorContainer {...props} />;
		case "background":
			return <BackgroundColorContainer {...props} />;
		default:
			return null;
	}
};

export default ColorsScale;
