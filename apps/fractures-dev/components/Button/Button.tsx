import type { ButtonProps } from "./Button.types";
import type React from "react";
import classNames from "@sindresorhus/class-names";
import styles from "./Button.module.css";

const Button: React.FC<ButtonProps> = (props) => {
	const typeClasses: string = classNames({
		[`${styles.secondary} bg-purple-300 purple-800`]:
			props.type === "secondary",
		["bg-purple-800 gray-0"]: props.type === "primary",
	});

	return (
		<div
			className={`inline-flex p-6 radius-2 flex-ycenter unselectable relative flex-gap-1 bold ${typeClasses}`}
		>
			{props.children}
		</div>
	);
};

export default Button;
