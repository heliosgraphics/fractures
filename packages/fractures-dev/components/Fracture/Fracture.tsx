import classNames from "@sindresorhus/class-names";
import styles from "./Fracture.module.css";
import type { FractureProps } from "./Fracture.types";

const Fracture: React.FC<FractureProps> = (props) => {
	if (!props.rule) return null;

	const selector: string = props.rule.selectorNice || props.rule.selector;
	const fractureClasses: string = classNames(
		styles.fracture,
		"inline-flex p-2 radius-1 tiny mono nowrap",
		{
			[`bg-${props.colorScale || "gray"}-${props.colorTint ?? 100}`]:
				props.colorScale || props.colorTint,
			[`gray-0`]: props.colorTint >= 500,
		}
	);

	return (
		<div className="inline-flex flex-gap-1">
			<code className={fractureClasses}>
				<span className="gray-300 unselectable">.</span>
				{selector}
			</code>
		</div>
	);
};

export default Fracture;
