import { getClasses } from "@heliosgraphics/utils/classnames"
import styles from "./Tooltip.module.css"
import type { TooltipProps } from "./Tooltip.types"
import type { FC } from "react"

export const Tooltip: FC<TooltipProps> = ({ position }) => {
	const tooltipClasses: string = getClasses(styles.tooltip, {
		[styles.tooltipLeft]: position === "left",
		[styles.tooltipRight]: position === "right",
		[styles.tooltipTop]: position === "top",
		[styles.tooltipBottom]: position === "bottom",
	})

	return <div className={tooltipClasses}>{position}</div>
}
