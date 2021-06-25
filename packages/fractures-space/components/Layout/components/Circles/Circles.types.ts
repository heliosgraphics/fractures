export type CircleColorSet = [string, string, string, string];

export interface CircleColors {
	"/": CircleColorSet;
	"/config": CircleColorSet;
	"/layout": CircleColorSet;
	"/colors": CircleColorSet;
	"/typography": CircleColorSet;
	"/tools": CircleColorSet;
}

export interface CirclesProps {
	className?: string;
}
