import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "@components/PageContainer";
import Pre from "../components/Pre";
import SectionBlock from "../components/SectionBlock";
import SectionCode from "../components/SectionCode";
import Small from "../components/Small";

const Config: React.FC<{}> = () => (
	<Layout title="Config">
		<PageContainer>
			<H0>Get started</H0>
			<SectionBlock title="Fundamentals">
				<P>
					Fractures does not try to replace your current systems.
					Instead it provides a solid, immutable base to build on top
					of. The point is <b>not to stop writing CSS</b>, but to keep
					your custom CSS maintainable. It aims to be the baseline of
					a system to enable fast moving teams to build better UIs.
				</P>
				<P>
					It contains two essential concepts:{" "}
					<Link href="/layout">
						<a>Breakpoints</a>
					</Link>{" "}
					and{" "}
					<Link href="/colors">
						<a>Hover</a>
					</Link>
					.
				</P>
			</SectionBlock>
			<SectionBlock title="Config">
				<P>
					Fractures works with empty <code>:root &#123;&#125;</code>{" "}
					or with a fully customized one.
					<br />
					<code>import 'fractures'</code> then set your variables. For
					example, this page sets only:
				</P>
				<Pre
					code={[
						":root {",
						`  --font-family-sans: <mark>"Inter", Arial, sans-serif;</mark>`,
						`  --font-family-serif: <mark>"Georgia"</mark>;`,
						`  --font-family-mono: <mark>"IBM Plex Mono", monospace</mark>;`,
						`  --font-weight-bold: 500;`,
						`  --font-weight-bolder: 700;`,
						"}",
					]}
				/>
			</SectionBlock>
			<SectionBlock title="Variables">
				<SectionCode
					title="Boxes"
					code={[
						`--box-px: <mark>1px</mark>;`,
						`--box-1: <mark>2px</mark>;`,
						`--box-2: <mark>4px</mark>;`,
						`--box-3: <mark>6px</mark>;`,
						`--box-4: <mark>8px</mark>;`,
						`--box-5: <mark>10px</mark>;`,
						`--box-6: <mark>12px</mark>;`,
						`--box-7: <mark>14px</mark>;`,
						`--box-8: <mark>16px</mark>;`,
						`--box-9: <mark>18px</mark>;`,
						`--box-10: <mark>20px</mark>;`,
						`--box-11: <mark>22px</mark>;`,
						`--box-12: <mark>24px</mark>;`,
						`--box-13: <mark>26px</mark>;`,
						`--box-14: <mark>28px</mark>;`,
						`--box-15: <mark>30px</mark>;`,
						`--box-16: <mark>32px</mark>;`,
						`--box-24: <mark>48px</mark>;`,
						`--box-32: <mark>64px</mark>;`,
						`--box-40: <mark>80px</mark>;`,
						`--box-48: <mark>96px</mark>;`,
					]}
				>
					<P>Initial fracture scale, goes from 1px to 96px.</P>
					<Small>
						Disclaimer: In beta these are still exposed, but will be
						dropped from the final version.
					</Small>
				</SectionCode>
				<SectionCode
					title="Font size and Line height"
					code={[
						`--font-size-h1: <mark>36px</mark>;`,
						`--font-size-h2: <mark>32px</mark>;`,
						`--font-size-h3: <mark>28px</mark>;`,
						`--font-size-h4: <mark>24px</mark>;`,
						`--font-size-h5: <mark>20px</mark>;`,
						`--font-size-h6: <mark>18px</mark>;`,
						`--font-size-p: <mark>16px</mark>;`,
						`--font-size-small: <mark>14px</mark>;`,
						`--font-size-tiny: <mark>12px</mark>;`,
						`--line-height-h1: <mark>44px</mark>;`,
						`--line-height-h2: <mark>40px</mark>;`,
						`--line-height-h3: <mark>36px</mark>;`,
						`--line-height-h4: <mark>32px</mark>;`,
						`--line-height-h5: <mark>26px</mark>;`,
						`--line-height-h6: <mark>24px</mark>;`,
						`--line-height-p: <mark>22px</mark>;`,
						`--line-height-small: <mark>18px</mark>;`,
						`--line-height-tiny: <mark>14px</mark>;`,
					]}
				>
					<P>Default are based on a 8px scale.</P>
				</SectionCode>
				<SectionCode
					title="Font families"
					code={[
						`--font-family-sans: <mark>"Arial"</mark>;`,
						`--font-family-serif: <mark>"Georgia"</mark>;`,
						`--font-family-mono: <mark>"Monospace"</mark>;`,
					]}
				></SectionCode>
				<SectionCode
					title="Font weights"
					code={[
						`--font-weight-lighter: <mark>lighter</mark>;`,
						`--font-weight-light: <mark>light</mark>;`,
						`--font-weight-normal: <mark>normal</mark>;`,
						`--font-weight-bold: <mark>bold</mark>;`,
						`--font-weight-bolder: <mark>bolder</mark>;`,
					]}
				></SectionCode>
				<SectionCode
					title="Z indices"
					code={[
						`--z-index-0: <mark>0</mark>;`,
						`--z-index-10: <mark>100</mark>;`,
						`--z-index-20: <mark>200</mark>;`,
						`--z-index-30: <mark>300</mark>;`,
						`--z-index-40: <mark>400</mark>;`,
						`--z-index-50: <mark>500</mark>;`,
						`--z-index-60: <mark>600</mark>;`,
						`--z-index-70: <mark>700</mark>;`,
						`--z-index-80: <mark>800</mark>;`,
						`--z-index-90: <mark>900</mark>;`,
						`--z-index-100: <mark>1000</mark>;`,
					]}
				></SectionCode>
				<SectionCode
					title="Colors"
					code={[
						`--gray-0: <mark>white</mark>;`,
						`--gray-25: <mark>#F9FAFA</mark>;`,
						`--gray-50: <mark>#F7F7F8</mark>;`,
						`--gray-100: <mark>#F1F2F3</mark>;`,
						`--gray-200: <mark>#D6D8DB</mark>;`,
						`--gray-300: <mark>#BBBFC3</mark>;`,
						`--gray-400: <mark>#A0A5AB</mark>;`,
						`--gray-500: <mark>#858B94</mark>;`,
						`--gray-600: <mark>#6B727A</mark>;`,
						`--gray-700: <mark>#54595F</mark>;`,
						`--gray-800: <mark>#3C3F44</mark>;`,
						`--gray-900: <mark>#242629</mark>;`,
						`--gray-1000: <mark>black</mark>;`,

						`--red-100: <mark>#FCE9EA</mark>;`,
						`--red-200: <mark>#F5BCC0</mark>;`,
						`--red-300: <mark>#EF9096</mark>;`,
						`--red-400: <mark>#E8636D</mark>;`,
						`--red-500: <mark>#E13743</mark>;`,
						`--red-600: <mark>#C81E29</mark>;`,
						`--red-700: <mark>#9C1720</mark>;`,
						`--red-800: <mark>#6F1017</mark>;`,
						`--red-900: <mark>#430A0E</mark>;`,

						`--yellow-100: <mark>#FEF6E6</mark>;`,
						`--yellow-200: <mark>#FCE4B5</mark>;`,
						`--yellow-300: <mark>#FAD284</mark>;`,
						`--yellow-400: <mark>#F9C053</mark>;`,
						`--yellow-500: <mark>#F7AE22</mark>;`,
						`--yellow-600: <mark>#DD9408</mark>;`,
						`--yellow-700: <mark>#AC7306</mark>;`,
						`--yellow-800: <mark>#7B5205</mark>;`,
						`--yellow-900: <mark>#4A3103</mark>;`,

						`--green-100: <mark>#EAFAF0</mark>;`,
						`--green-200: <mark>#C1F1D1</mark>;`,
						`--green-300: <mark>#97E8B3</mark>;`,
						`--green-400: <mark>#6DDE94</mark>;`,
						`--green-500: <mark>#44D576</mark>;`,
						`--green-600: <mark>#2ABB5C</mark>;`,
						`--green-700: <mark>#219248</mark>;`,
						`--green-800: <mark>#176833</mark>;`,
						`--green-900: <mark>#0E3E1F</mark>;`,

						`--blue-100: <mark>#E8E7FD</mark>;`,
						`--blue-200: <mark>#B9B8F9</mark>;`,
						`--blue-300: <mark>#8B89F5</mark>;`,
						`--blue-400: <mark>#5D5AF1</mark>;`,
						`--blue-500: <mark>#2E2BEE</mark>;`,
						`--blue-600: <mark>#1511D4</mark>;`,
						`--blue-700: <mark>#100EA5</mark>;`,
						`--blue-800: <mark>#0B0A76</mark>;`,
						`--blue-900: <mark>#070647</mark>;`,

						`--purple-100: <mark>#F1E8FC</mark>;`,
						`--purple-200: <mark>#D5BAF7</mark>;`,
						`--purple-300: <mark>#B98CF2</mark>;`,
						`--purple-400: <mark>#9D5EED</mark>;`,
						`--purple-500: <mark>#8030E8</mark>;`,
						`--purple-600: <mark>#6717CF</mark>;`,
						`--purple-700: <mark>#5012A1</mark>;`,
						`--purple-800: <mark>#390D73</mark>;`,
						`--purple-900: <mark>#220845</mark>;`,

						`--pink-100: <mark>#FCE9F4</mark>;`,
						`--pink-200: <mark>#F6BCDF</mark>;`,
						`--pink-300: <mark>#EF8FC9</mark>;`,
						`--pink-400: <mark>#E962B3</mark>;`,
						`--pink-500: <mark>#E3369E</mark>;`,
						`--pink-600: <mark>#C91C84</mark>;`,
						`--pink-700: <mark>#9D1667</mark>;`,
						`--pink-800: <mark>#701049</mark>;`,
						`--pink-900: <mark>#43092C</mark>;`,
					]}
				>
					<P>
						Read more about{" "}
						<Link href="/colors">
							<a>colors</a>
						</Link>
						.
					</P>
				</SectionCode>
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default Config;
