import SectionBlock from "../SectionBlock";
import GridItem from "./components/GridItem";
import type { SectionGridProps } from "./SectionGrid.types";

const SectionGrid: React.FC<SectionGridProps> = (props) => {
	return (
		<SectionBlock title={props.title} isExperimental={props.isExperimental}>
			{props.children}
			<div className="flex flex-wrap flex-gap-1">
				{props.items.map((hd, key) => (
					<GridItem key={key} rule={hd} />
				))}
			</div>
		</SectionBlock>
	);
};

export default SectionGrid;
