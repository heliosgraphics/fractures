import BreakPointChart from "../components/BreakPointChart";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
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
			<SectionBlock title="Breakpoints">
				<P>
					Fractures has 5 fixed breakpoint prefixes to help you build responsive
					layouts.
					<br />
					Resize this page to see how they work.
				</P>
			</SectionBlock>
		</PageContainer>
		<BreakPointChart />
		<PageContainer>
			<P>
				Responsive selectors are marked with a purple dot and can be used with
				any of these prefixes:
				<br />
				<br />
				<code>
					<b>sm</b>:<em>selector</em>
				</code>
				<br />
				<code>
					<b>md</b>:<em>selector</em>
				</code>
				<br />
				<code>
					<b>lg</b>:<em>selector</em>
				</code>
				<br />
				<code>
					<b>xl</b>:<em>selector</em>
				</code>
				<br />
				<code>
					<b>xxl</b>:<em>selector</em>
				</code>
			</P>
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
