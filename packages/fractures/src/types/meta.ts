import type { Properties } from "csstype"

export type { Properties }

export interface FractureRuleType {
	/** Declaration rules attached to the selector. */
	declarations?: Properties
	/** Description. */
	description?: string
	/** Gets generated, but hidden from demo website. */
	isHidden?: boolean
	/** Name of the selector. */
	selector: string
	/** Nice selector name. */
	selectorNice?: string
	/** Local CSS variables. */
	variables?: Record<string, any>
}

export interface FractureFiles {
	borderRadius: Array<FractureRuleType>
	cursor: Array<FractureRuleType>
	display: Array<FractureRuleType>
	flex: Array<FractureRuleType>
	grid: Array<FractureRuleType>
	height: Array<FractureRuleType>
	list: Array<FractureRuleType>
	margin: Array<FractureRuleType>
	opacity: Array<FractureRuleType>
	overflow: Array<FractureRuleType>
	padding: Array<FractureRuleType>
	position: Array<FractureRuleType>
	type: Array<FractureRuleType>
	width: Array<FractureRuleType>
}
