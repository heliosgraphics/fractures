import Square from "../Square";
import type { ColorGridProps } from "./ColorGrid.types";

const OPACITY_SCALE: Array<number> = [
	100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0,
];

const ColorGrid: React.FC<ColorGridProps> = (props) => {
	return (
		<div className="flex flex-column">
			<span className={`small bold py-4 ${props.color}-700`}>
				{props.color.charAt(0).toUpperCase() + props.color.slice(1)}
			</span>
			{OPACITY_SCALE.map((scale) => {
				return (
					<div className="flex">
						{props.toneScale.map((tone) => {
							const isFirst: boolean = scale === 100;
							const getTone = (): 100 | 300 | 500 | 700 => {
								if (tone >= 500) return 100;
								if (tone < 500) return 700;
							};
							const scaleClass: string = `wp-100 p-1 bg-${props.color}-${tone} bg-opacity-${scale}`;

							return (
								<>
									{isFirst && (
										<div
											className={`${scaleClass} flex flex-column flex-gap-2 py-8 px-4`}
										>
											<Square
												colorScale={props.color}
												colorTone={getTone()}
												isRounded={true}
												size={4}
											/>
											<span
												className={`tiny mono nowrap ${
													props.color
												}-${getTone()}`}
											>
												{tone}
											</span>
										</div>
									)}
								</>
							);
						})}
					</div>
				);
			})}
		</div>
	);
};

export default ColorGrid;
