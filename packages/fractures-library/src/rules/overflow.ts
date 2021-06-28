import type { FractureRuleType } from "../../types/css-rules";

// prettier-ignore
export const overflow: Array<FractureRuleType> = [
	{ selector: "overflow-hidden", declarations: {overflow: "hidden"} },
	{ selector: "overflow-scroll", declarations: {overflow: "scroll"} },
	{ selector: "overflow-visible", declarations: {overflow: "visible"} },
	{ selector: "overflow-y-hidden", declarations: {overflowY: "hidden"} },
	{ selector: "overflow-y-scroll", declarations: {overflowY: "scroll"} },
	{ selector: "overflow-y-visible", declarations: {overflowY: "visible"} },
	{ selector: "overflow-x-hidden", declarations: {overflowX: "hidden"} },
	{ selector: "overflow-x-scroll", declarations: {overflowX: "scroll"} },
	{ selector: "overflow-x-visible", declarations: {overflowX: "visible"} },
];
