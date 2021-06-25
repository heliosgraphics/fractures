import SectionBlock from "../SectionBlock";
import Fracture from "../Fracture";
import styled from "styled-components";
import type { SectionGridProps } from "./SectionGrid.types";

const SectionGridMarkup: React.FC<SectionGridProps> = (props) => (
	<SectionBlock title={props.title} className={props.className}>
		{props.children}
		<div className="grid grid-cols-4 grid-gap-8">
			{props.items.map((hd, key) => (
				<div className="fr-section-grid__item flex flex-column flex-gap-3 p-4">
					<div
						className={`sans small bold ${
							props.isDemo ? hd[0] : ""
						}`}
					>
						{hd[1]}
					</div>
					<Fracture class={hd[0]} />
				</div>
			))}
		</div>
	</SectionBlock>
);

const SectionGrid = styled(SectionGridMarkup)`
	.fr-section-grid__item {
		border: 1px solid var(--gray-100);
	}
`;

export default SectionGrid;
