import type { LabelProps } from "./Label.types";

const Label: React.FC<LabelProps> = (props) => {
	return (
		<div
			className="inline-flex flex-gap-4 inline-flex px-3 py-1
    bg-gray-100 gray-700 radius-1
    tiny mono unselectable"
		>
			{props.text}
		</div>
	);
};

export default Label;
