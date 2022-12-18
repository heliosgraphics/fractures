import H0 from "fractures-dev/components/H0";
import Layout from "fractures-dev/components/Layout";
import Link from "next/link";
import P from "fractures-dev/components/P";
import PageContainer from "fractures-dev/components/PageContainer";
import Pre from "fractures-dev/components/Pre";
import SectionBlock from "fractures-dev/components/SectionBlock";
import SectionCode from "fractures-dev/components/SectionCode";
import LightHouse from "fractures-dev/components/Lighthouse";

const GetStarted: React.FC<{}> = () => (
	<Layout title="Get started">
		<PageContainer>
			<H0>Get started</H0>
			<SectionBlock title="Fundamentals">
				<P>
					Fractures does not try to replace your current systems. Instead it
					provides a solid, immutable base to build on top of. The point is{" "}
					<b>not to stop writing CSS</b>, but to keep your custom CSS
					maintainable. It aims to be the baseline of a system to enable fast
					moving teams to build better UIs.
				</P>
			</SectionBlock>
			<SectionBlock title="Setup">
				<P>
					For NextJS 13, you have to have a{" "}
					<a href="https://github.com/fractures/fractures/blob/main/packages/fractures-dev/app/layout.tsx#L5">
						layout.tsx
					</a>
					, with a single import at the top:{" "}
					<code>import &quot;@fractures/css&quot;</code>.<br />
					Fractures works with empty <code>:root &#123;&#125;</code> or with a
					fully customized one. This page sets only a few:
				</P>
				<Pre
					code={[
						":root {",
						`  --font-family-sans: <mark>"Inter", Arial, sans-serif;</mark>`,
						`  --font-family-mono: <mark>"IBM Plex Mono", monospace</mark>;`,
						`  --font-weight-bold: 500;`,
						`  --font-weight-bolder: 700;`,
						"}",
					]}
				/>
			</SectionBlock>
			<SectionBlock title="Usage">
				<div className="flex flex-gap-8">
					<LightHouse />
					<LightHouse />
					<LightHouse />
					<LightHouse />
				</div>
				<P>
					Fractures is below 10 KB gzipped, but for production you&apos;ll have
					to purge the unused CSS.
				</P>
			</SectionBlock>
			<SectionBlock title="Variables">
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
					<P>Defaults are based on a 8px scale.</P>
				</SectionCode>
				<SectionCode
					title="Font families"
					code={[
						`--font-family-sans: <mark>"Helvetica"</mark>;`,
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
					title="Colors"
					code={[
						`--hsl-aqua: <mark>187,87%</mark>;`,
						`--hsl-blue: <mark>230,87%</mark>;`,
						`--hsl-gray: <mark>225,10%</mark>;`,
						`--hsl-green: <mark>120,75%</mark>;`,
						`--hsl-orange: <mark>23,94%</mark>;`,
						`--hsl-pink: <mark>324,76%</mark>;`,
						`--hsl-purple: <mark>266,80%</mark>;`,
						`--hsl-red: <mark>356,84%</mark>;`,
						`--hsl-yellow: <mark>39,93%</mark>;`,
					]}
				>
					<P>
						Colors are defined as <code>HSL</code> values, see{" "}
						<Link href="/colors">details</Link>.
					</P>
				</SectionCode>
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
					<P>Initial fracture scale goes from 1px to 96px.</P>
				</SectionCode>
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
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default GetStarted;
