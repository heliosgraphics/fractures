import type { FractureRuleType } from "../types/meta"

export const borderRadius: Array<FractureRuleType> = [
	{ selector: "radius-1", declarations: { borderRadius: "var(--box-1)" } },
	{ selector: "radius-2", declarations: { borderRadius: "var(--box-2)" } },
	{ selector: "radius-3", declarations: { borderRadius: "var(--box-3)" } },
	{ selector: "radius-4", declarations: { borderRadius: "var(--box-4)" } },
	{ selector: "radius-5", declarations: { borderRadius: "var(--box-5)" } },
	{ selector: "radius-6", declarations: { borderRadius: "var(--box-6)" } },
	{ selector: "radius-7", declarations: { borderRadius: "var(--box-7)" } },
	{ selector: "radius-8", declarations: { borderRadius: "var(--box-8)" } },
	{ selector: "radius-100", declarations: { borderRadius: "100%" } },
	{ selector: "radius-max", declarations: { borderRadius: "9999px" } },
]
