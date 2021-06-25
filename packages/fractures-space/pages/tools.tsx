import Layout from "../components/Layout";
import SectionGrid from "../components/SectionGrid";
import H0 from "../components/H0";
import PageContainer from "../components/PageContainer";

const Tools: React.FC<{}> = () => (
	<Layout title="Tools">
		<PageContainer>
			<H0>Tools</H0>
			<SectionGrid title="Border" items={[]} />
			<SectionGrid title="Cursor" items={[]} />
			<SectionGrid title="List" items={[]} />
			<SectionGrid title="Opacity" items={[]} />
			<SectionGrid title="Overflow" items={[]} />
		</PageContainer>
	</Layout>
);

export default Tools;
