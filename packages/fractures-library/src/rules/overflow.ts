import type { FractureRuleType } from "../../types/css-rules";

export const overflow: Array<FractureRuleType> = [
	{ selector: "overflow-hidden", property: "overflow", value: "hidden" },
	{ selector: "overflow-scroll", property: "overflow", value: "scroll" },
	{ selector: "overflow-visible", property: "overflow", value: "visible" },

	{ selector: "overflow-y-hidden", property: "overflow-y", value: "hidden" },
	{ selector: "overflow-y-scroll", property: "overflow-y", value: "scroll" },
	{
		selector: "overflow-y-visible",
		property: "overflow-y",
		value: "visible",
	},

	{ selector: "overflow-x-hidden", property: "overflow-x", value: "hidden" },
	{ selector: "overflow-x-scroll", property: "overflow-x", value: "scroll" },
	{
		selector: "overflow-x-visible",
		property: "overflow-x",
		value: "visible",
	},
];
