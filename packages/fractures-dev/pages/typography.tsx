import TypeExample from "../components/TypeExample";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionGrid from "../components/SectionGrid";
import { type } from "fractures-library/src/rules/type";

const About = () => (
	<Layout title="Typography">
		<PageContainer>
			<H0>Typography</H0>
			<SectionBlock title="Headings">
				<TypeExample classes="h1 bolder" fontSize={36} lineHeight={42}>
					Almost before we knew it, we had left the ground.
				</TypeExample>
				<TypeExample classes="h2 bolder" fontSize={32} lineHeight={40} />
				<TypeExample classes="h3 bolder" fontSize={28} lineHeight={36} />
				<TypeExample classes="h4 bolder" fontSize={24} lineHeight={32} />
				<TypeExample classes="h5 bolder" fontSize={20} lineHeight={26} />
				<TypeExample classes="h6 bolder" fontSize={18} lineHeight={24} />
			</SectionBlock>
			<SectionBlock title="Text">
				<TypeExample classes="p" fontSize={16} lineHeight={24}>
					Aeschynanthus Radicans, more commonly known as a lipstick plant, is a
					popular and striking evergreen tropical houseplant. It gets its name
					from the vibrant red and tubular flowers that appear above a burgundy
					bud
				</TypeExample>
				<TypeExample classes="small" fontSize={14} lineHeight={20} />
				<TypeExample classes="tiny" fontSize={12} lineHeight={16} />
			</SectionBlock>
			<SectionGrid title="Type helpers" items={type} isDemo={true} />
		</PageContainer>
	</Layout>
);

export default About;
