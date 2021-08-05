import type { FractureRuleType } from 'fractures-library/types/css-rules'

export interface FractureProps {
	className?: string;
	rule: FractureRuleType;
	colorScale?: string;
	colorTint?: number;
}
