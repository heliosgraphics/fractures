import type React from "react";
import type { FractureRuleType } from "fractures-library/types/css-rules";

export interface SectionGridProps {
	className?: string;
	children?: React.ReactNodeArray | React.ReactNode;
	title: string;
	isExperimental?: boolean;
	items: Array<FractureRuleType>;
	isDemo?: boolean;
}
