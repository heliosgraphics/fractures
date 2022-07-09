import H0 from "../components/H0";
import Layout from "../components/Layout";
import PageContainer from "../components/PageContainer";
import SectionGrid from "../components/SectionGrid";
import { display } from "fractures-library/src/rules/display";
import { height } from "fractures-library/src/rules/height";
import { flex } from "fractures-library/src/rules/flex";
import { grid } from "fractures-library/src/rules/grid";
import { width } from "fractures-library/src/rules/width";
import { overflow } from "fractures-library/src/rules/overflow";
import { position } from "fractures-library/src/rules/position";
import { margin } from "fractures-library/src/rules/margin";
import { padding } from "fractures-library/src/rules/padding";

const LayoutPage: React.FC<{}> = () => (
	<Layout title="Layout">
		<PageContainer>
			<H0>Layout</H0>
			<SectionGrid title="Display" items={display}></SectionGrid>
			<SectionGrid title="Flex" items={flex} />
			<SectionGrid title="Grid" items={grid} isExperimental={true} />
			<SectionGrid title="Height" items={height} />
			<SectionGrid title="Width" items={width} />
			<SectionGrid title="Position" items={position} />
			<SectionGrid title="Overflow" items={overflow} />
			<SectionGrid title="Margin" items={margin} />
			<SectionGrid title="Padding" items={padding} />
		</PageContainer>
	</Layout>
);

export default LayoutPage;
