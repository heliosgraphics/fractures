import type React from "react";

export interface ContainerProps {
	className?: string;
	isWide?: boolean;
	children: React.ReactNodeArray | React.ReactNode;
}
