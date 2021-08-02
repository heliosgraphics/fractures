import { Properties } from "csstype";

export enum FractureBreakpoints {
	xxl = "1360px",
	xl = "1032px",
	lg = "864px",
	md = "696px",
	sm = "444px",
}

export type { Properties };

export interface FractureRuleType {
	/** Declaration rules attached to the selector. */
	declarations?: Properties;
	/** Demo: Description. */
	description?: string;
	/** Flag to generate breakpoints for this item. */
	hasBreakpoints?: boolean;
	/** Flag to generate hovers for this item. */
	hasHover?: boolean;
	/** Demo: Gets generated, but hidden from demo website. */
	isHidden?: boolean;
	/** Classname string. */
	selector: string;
	/** Demo: nice selector string for the demo. */
	selectorNice?: string;
	/** Local CSS variables. */
	variables?: Record<string, any>;
}

export interface FractureFiles {
	background: Array<FractureRuleType>;
	border: Array<FractureRuleType>;
	color: Array<FractureRuleType>;
	colorOpacity: Array<FractureRuleType>;
	cursor: Array<FractureRuleType>;
	display: Array<FractureRuleType>;
	flex: Array<FractureRuleType>;
	grid: Array<FractureRuleType>;
	height: Array<FractureRuleType>;
	list: Array<FractureRuleType>;
	margin: Array<FractureRuleType>;
	opacity: Array<FractureRuleType>;
	overflow: Array<FractureRuleType>;
	padding: Array<FractureRuleType>;
	position: Array<FractureRuleType>;
	type: Array<FractureRuleType>;
	width: Array<FractureRuleType>;
}
