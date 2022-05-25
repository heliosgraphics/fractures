import ColorsHover from "../components/ColorsHover";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import ColorGrid from "../components/ColorGrid";
import SectionBlock from "../components/SectionBlock";
import SectionGrid from "../components/SectionGrid";
import { colorOpacity } from "fractures-library/src/rules/colorOpacity";

const grayToneScale: Array<number> = [
	0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

const toneScale: Array<number> = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const Colors: React.FC<{}> = () => (
	<Layout title="Colors">
		<PageContainer>
			<H0>Colors</H0>
			<SectionBlock title="Color and Background">
				<P>
					Colors are defined as <code>HSL</code> values, and can be used with
					pure CSS classes like
					<code>.bg-red-500</code> and
					<code>.green-500</code> or directly with <code>var(--green-500)</code>{" "}
					or <code>hsla(var(--hsl-gray-300), 0.1)</code> with alpha channel.
				</P>
				<ColorGrid color="gray" toneScale={grayToneScale} />
				<ColorGrid color="red" toneScale={toneScale} />
				<ColorGrid color="orange" toneScale={toneScale} />
				<ColorGrid color="yellow" toneScale={toneScale} />
				<ColorGrid color="green" toneScale={toneScale} />
				<ColorGrid color="aqua" toneScale={toneScale} />
				<ColorGrid color="blue" toneScale={toneScale} />
				<ColorGrid color="purple" toneScale={toneScale} />
				<ColorGrid color="pink" toneScale={toneScale} />
			</SectionBlock>
			<SectionGrid
				title="Color and Background opacity"
				items={colorOpacity}
				isDemo={true}
			/>
			<SectionBlock title="Hover">
				<P>
					The <code>hover:</code> prefix is enabled for the customizable{" "}
					<code>color</code> and <code>background-color</code> properties.
				</P>
				<ColorsHover />
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default Colors;
