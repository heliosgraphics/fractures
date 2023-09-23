import styles from "./P.module.css";
import type { PProps } from "./P.types";
import type React from "react";

const P: React.FC<PProps> = (props) => {
	return <p className={`${styles.p} sans p gray-900`}>{props.children}</p>;
};

export default P;
