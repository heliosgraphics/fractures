import Tiny from "../../../Tiny";
import Fracture from "../../../Fracture";
import styled from "styled-components";
import type { GridItemProps } from "./GridItem.types";

const GridItemMarkup: React.FC<GridItemProps> = (props) => {
	if (props.rule.isHidden) return null;

	return (
		<div
			className={`${props.className} fr-section-grid__item radius-1 relative flex flex-column flex-gap-2 p-2`}
		>
			<Fracture colorScale="gray" colorTint={100} rule={props.rule} />
			{props.rule.description && (
				<Tiny className="gray-500">{props.rule.description}</Tiny>
			)}
		</div>
	);
};

const GridItem: React.FC<GridItemProps> = styled(GridItemMarkup)`
	.fr-section-grid__item {
		border: 1px solid var(--gray-100);
	}
`;

export default GridItem;
