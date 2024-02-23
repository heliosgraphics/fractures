import type { Properties } from "csstype"

export type { Properties }

export interface FractureRuleType {
	declarations?: Properties
	description?: string
	isHidden?: boolean
	selector: string
	selectorNice?: string
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
