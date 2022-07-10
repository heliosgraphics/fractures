import H0 from "../components/H0";
import Layout from "../components/Layout";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import ColorGrid from "../components/ColorGrid";
import SectionBlock from "../components/SectionBlock";

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
					<code>.bg-red-500</code> or directly, <code>var(--green-500)</code> or{" "}
					<code>hsla(var(--hsl-gray-300), 0.1)</code> with alpha channel. Scales
					are linear by default, but all the steps are exposed and customizable.
				</P>
				<ul className="list-disc">
					<li className="ml-12">
						<P>
							For example, to have a slightly different purple scale, add{" "}
							<code>--hsl-purple: 261,80%;</code> to <code>:root</code>.
						</P>
					</li>
					<li className="ml-12">
						<P>
							To update a single color to a more tone-correct one, you can add
							<code>--green-600: #0F0</code> to <code>:root</code>.<br />
						</P>
					</li>
				</ul>
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
		</PageContainer>
	</Layout>
);

export default Colors;
