export type HeaderLinks = Array<{
	name?: string;
	url?: string;
	icon?: React.ReactElement;
	isExternal?: boolean;
	isDesktop?: boolean;
}>;

export interface NavProps {
	className?: string;
}
