import Fracture from "../../../Fracture";
import type { GridItemProps } from "./GridItem.types";

const GridItem: React.FC<GridItemProps> = (props) => {
	if (props.rule.isHidden) return null;

	return (
		<div className="radius-1 relative flex flex-column flex-gap-2 p-2`">
			<Fracture colorScale="gray" colorTint={100} rule={props.rule} />
		</div>
	);
};

export default GridItem;
