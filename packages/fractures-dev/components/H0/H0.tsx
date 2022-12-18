import styles from "./H0.module.css";
import type { h0Props } from "./H0.types";
import type React from "react";

const H0: React.FC<h0Props> = (props) => {
	return <h1 className={styles.h0}>{props.children}</h1>;
};

export default H0;
