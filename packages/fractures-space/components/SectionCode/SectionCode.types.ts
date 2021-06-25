import type React from "react";

export interface SectionCodeProps {
	className?: string;
	children?: React.ReactNodeArray | React.ReactNode;
	title: string;
	code: Array<string>;
}
