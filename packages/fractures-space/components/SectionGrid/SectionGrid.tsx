import SectionBlock from "../SectionBlock";
import GridItem from "./components/GridItem";
import styled from "styled-components";
import type { SectionGridProps } from "./SectionGrid.types";

interface DotProps {
	className?: string;
	size: number;
}

const DotMarkup: React.FC<DotProps> = (props) => (
	<svg
		width="100%"
		height="100%"
		className={props.className}
		viewBox="0 0 20 20"
	>
		<circle fill="var(--purple-500)" cx={10} cy={10} r={10} />
	</svg>
);

const Dot = styled(DotMarkup)`
	height: ${(props) => props.size}px;
	min-width: ${(props) => props.size}px;
	max-width: ${(props) => props.size}px;
	width: ${(props) => props.size}px;
`;

const SectionGridMarkup: React.FC<SectionGridProps> = (props) => {
	const renderDot: React.ReactNode = (
		<div className="absolute right-2 top-0">
			<Dot size={6} />
		</div>
	);

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

const SectionGrid = styled(SectionGridMarkup)`
	.fr-section-grid__item {
		border: 1px solid var(--gray-100);
	}
`;

export default SectionGrid;
