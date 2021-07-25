import React from "react";

export interface SectionBlockProps {
	className?: string;
	children?: React.ReactNodeArray | React.ReactNode;
	isExperimental?: boolean;
	title: string;
}
