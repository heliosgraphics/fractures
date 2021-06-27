import { Properties } from "csstype";

export enum FractureBreakpoints {
	xxl = "1360px",
	xl = "1032px",
	lg = "864px",
	md = "696px",
	sm = "444px",
}

export interface FractureRuleType {
	description?: string;
	hasBreakpoints?: boolean;
	hasHover?: boolean;
	property: string;
	// property: keyof Properties;
	// backgroundColor
	selector: string;
	value: string;
}

export interface FractureFiles {
	background: Array<FractureRuleType>;
	border: Array<FractureRuleType>;
	color: Array<FractureRuleType>;
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
