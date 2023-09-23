import styles from "./Tiny.module.css";
import type { TinyProps } from "./Tiny.types";
import type React from "react";

const Tiny: React.FC<TinyProps> = (props) => {
	return <small className={`${styles.tiny} tiny`}>{props.children}</small>;
};

export default Tiny;
