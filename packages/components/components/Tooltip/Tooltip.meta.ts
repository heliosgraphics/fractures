import type { HeliosAttributeMeta } from "../.."
import type { TooltipProps } from "./Tooltip.types"

export const meta: HeliosAttributeMeta<TooltipProps> = {
	_patterns: [
		{
			id: "ui-tooltip-default",
			description: "default",
			content: `<div></div>`,
		},
	],
	_status: "experimental",
	_category: "core",
	position: {
		type: "'left' | 'right' | 'top' | 'bottom'",
		isOptional: true,
	},
}
