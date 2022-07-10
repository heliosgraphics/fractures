import { border } from "fractures-library/src/rules/border";
import { colorOpacity } from "fractures-library/src/rules/colorOpacity";
import { cursor } from "fractures-library/src/rules/cursor";
import { display } from "fractures-library/src/rules/display";
import { flex } from "fractures-library/src/rules/flex";
import { grid } from "fractures-library/src/rules/grid";
import { height } from "fractures-library/src/rules/height";
import { list } from "fractures-library/src/rules/list";
import { margin } from "fractures-library/src/rules/margin";
import { opacity } from "fractures-library/src/rules/opacity";
import { overflow } from "fractures-library/src/rules/overflow";
import { padding } from "fractures-library/src/rules/padding";
import { position } from "fractures-library/src/rules/position";
import { type } from "fractures-library/src/rules/type";
import { width } from "fractures-library/src/rules/width";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";

const Selectors: React.FC<{}> = () => (
	<Layout title="Selectors">
		<PageContainer>
			<H0>Selectors</H0>
			<SectionGrid title="Border" items={border} />
			<SectionGrid title="Color Opacity" items={colorOpacity} />
			<SectionGrid title="Cursor" items={cursor} />
			<SectionGrid title="Display" items={display} />
			<SectionGrid title="Flex" items={flex} />
			<SectionGrid title="Grid" items={grid} isExperimental={true} />
			<SectionGrid title="Height" items={height} />
			<SectionGrid title="List" items={list} />
			<SectionGrid title="Margin" items={margin} />
			<SectionGrid title="Opacity" items={opacity} />
			<SectionGrid title="Overflow" items={overflow} />
			<SectionGrid title="Padding" items={padding} />
			<SectionGrid title="Position" items={position} />
			<SectionGrid title="Type" items={type} isDemo={true} />
			<SectionGrid title="Width" items={width} />
		</PageContainer>
	</Layout>
);

export default Selectors;
