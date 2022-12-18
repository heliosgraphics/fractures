import styles from "./Lighthouse.module.css";
import type { LightHouseProps } from "./Lighthouse.types";
import type React from "react";

const Lighthouse: React.FC<LightHouseProps> = () => {
	return (
		<div className={`${styles.lighthouse} mono green-900 radius-100 center`}>
			100
		</div>
	);
};

export default Lighthouse;
