import styles from "./Small.module.css";
import type { SmallProps } from "./Small.types";
import type React from "react";

const Small: React.FC<SmallProps> = (props) => {
	return (
		<p className={`${props.className} ${styles.small} sans small`}>
			{props.children}
		</p>
	);
};

export default Small;
