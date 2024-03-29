import type { FractureRuleType } from "../types/meta"

export const BORDER_RADIUS: Array<FractureRuleType> = [
	{ selector: "radius-small", declarations: { borderRadius: "var(--radius-small)" } },
	{ selector: "radius-normal", declarations: { borderRadius: "var(--radius-normal)" } },
	{ selector: "radius-large", declarations: { borderRadius: "var(--radius-large)" } },
	{ selector: "radius-100", declarations: { borderRadius: "100%" } },
	{ selector: "radius-max", declarations: { borderRadius: "9999px" } },
] as const
