import type React from "react";

export type SectionGridItem = [string, string];

export interface SectionGridProps {
	className?: string;
	children?: React.ReactNodeArray | React.ReactNode;
	title: string;
	items: Array<SectionGridItem>;
	isDemo?: boolean;
}
