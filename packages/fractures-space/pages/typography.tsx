import TypeExample from "../components/TypeExample";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionGrid from "../components/SectionGrid";

const helperDescriptions: Array<[string, string]> = [
	["sans", "Font family is sans."],
	["serif", "Font family is serif."],
	["mono", "Font family is mono."],
	["lighter", "Lighter font weight."],
	["light", "Light font weight."],
	["normal", "Normal font weight."],
	["bold", "Bold font weight."],
	["bolder", "Bolder font weight."],
	["italic", "Italic style font."],
	["normal", "Normal style font."],
	["oblique", "Oblique style font."],
	["center", "Text center aligned."],
	["justify", "Text justify aligned."],
	["left", "Text left aligned."],
	["right", "Text right aligned."],
	["line-through delete", "Line-through text."],
	["overline", "Overline text."],
	["underline", "Underline text."],
	["capitalize", "Capitalized text."],
	["lowercase", "Lowercase text."],
	["uppercase", "Uppercase text"],
	["pre", "Pre text."],
	["pre-line", "Pre-line text."],
	["pre-wrap", "Pre-wrap text."],
	["nowrap", "Nowrap text."],
	["break-word", "Break the words in text."],
	["unselectable", "Text is unselectable."],
	["ellipsis", "Text is ellipsing out."],
];

const About = () => (
	<Layout title="Typography">
		<PageContainer>
			<H0>Typograpy</H0>
			<SectionBlock title="Headings">
				<TypeExample classes="h1 bolder" fontSize={36} lineHeight={42}>
					Almost before we knew it, we had left the ground.
				</TypeExample>
				<TypeExample
					classes="h2 bolder"
					fontSize={32}
					lineHeight={40}
				/>
				<TypeExample
					classes="h3 bolder"
					fontSize={28}
					lineHeight={36}
				/>
				<TypeExample
					classes="h4 bolder"
					fontSize={24}
					lineHeight={32}
				/>
				<TypeExample
					classes="h5 bolder"
					fontSize={20}
					lineHeight={26}
				/>
				<TypeExample
					classes="h6 bolder"
					fontSize={18}
					lineHeight={24}
				/>
			</SectionBlock>
			<SectionBlock title="Text">
				<TypeExample classes="p" fontSize={16} lineHeight={22}>
					Aeschynanthus Radicans, more commonly known as a lipstick
					plant, is a popular and striking evergreen tropical
					houseplant. It gets its name from the vibrant red and
					tubular flowers that appear above a burgundy bud
				</TypeExample>
				<TypeExample classes="small" fontSize={14} lineHeight={20} />
				<TypeExample classes="tiny" fontSize={12} lineHeight={16} />
			</SectionBlock>
			<SectionGrid
				title="Type helpers"
				items={helperDescriptions}
				isDemo={true}
			/>
		</PageContainer>
	</Layout>
);

export default About;
