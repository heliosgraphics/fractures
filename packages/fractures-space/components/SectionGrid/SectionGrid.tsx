import SectionBlock from "../SectionBlock";
import GridItem from "./components/GridItem";
import type { SectionGridProps } from "./SectionGrid.types";

const SectionGrid: React.FC<SectionGridProps> = (props) => {
	return (
		<SectionBlock
			title={props.title}
			isExperimental={props.isExperimental}
			className={props.className}
		>
			{props.children}
			<div className="grid grid-cols-4 grid-gap-8">
				{props.items.map((hd, key) => (
					<GridItem key={key} rule={hd} />
				))}
			</div>
		</SectionBlock>
	);
};

export default SectionGrid;
