import Layout from "../components/Layout";
import SectionGrid from "../components/SectionGrid";
import H0 from "../components/H0";
import PageContainer from "../components/PageContainer";
import { border } from "fractures-library/src/rules/border";
import { cursor } from "fractures-library/src/rules/cursor";
import { list } from "fractures-library/src/rules/list";
import { opacity } from "fractures-library/src/rules/opacity";

const Tools: React.FC<{}> = () => (
	<Layout title="Tools">
		<PageContainer>
			<H0>Tools</H0>
			<SectionGrid title="Border" items={border} />
			<SectionGrid title="Cursor" items={cursor} />
			<SectionGrid title="List" items={list} />
			<SectionGrid title="Opacity" items={opacity} />
		</PageContainer>
	</Layout>
);

export default Tools;
