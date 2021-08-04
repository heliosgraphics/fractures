import type {FractureRuleType} from 'fractures-library/types/css-rules'

export interface SearchResultsProps {
	className?: string;
	isVisible?: boolean;
	results?: Array<FractureRuleType>;
}
