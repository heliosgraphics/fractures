import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import Pre from "../components/Pre";
import SectionBlock from "../components/SectionBlock";
import SectionCode from "../components/SectionCode";
import Small from "../components/Small";

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
					Fractures works with empty <code>:root &#123;&#125;</code> or with a
					fully customized one.
					<br />
					<code>import 'fractures'</code> then set your variables. For example,
					this page sets only:
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
						`--rgb-gray-0: <mark>255 255 255</mark>;`,
						`--rgb-gray-25: <mark>249 250 250</mark>;`,
						`--rgb-gray-50: <mark>247 247 248</mark>;`,
						`--rgb-gray-100: <mark>241 242 243</mark>;`,
						`--rgb-gray-200: <mark>214 216 219</mark>;`,
						`--rgb-gray-300: <mark>187 191 195</mark>;`,
						`--rgb-gray-400: <mark>160 165 171</mark>;`,
						`--rgb-gray-500: <mark>133 139 148</mark>;`,
						`--rgb-gray-600: <mark>107 114 122</mark>;`,
						`--rgb-gray-700: <mark>84 89 95</mark>;`,
						`--rgb-gray-800: <mark>60 63 68</mark>;`,
						`--rgb-gray-900: <mark>36 38 41</mark>;`,
						`--rgb-gray-1000: <mark>0 0 0</mark>;`,
						`&nbsp;`,
						`--rgb-red-100: <mark>252 233 234</mark>;`,
						`--rgb-red-200: <mark>245 188 192</mark>;`,
						`--rgb-red-300: <mark>239 144 150</mark>;`,
						`--rgb-red-400: <mark>232 99 109</mark>;`,
						`--rgb-red-500: <mark>225 55 67</mark>;`,
						`--rgb-red-600: <mark>200 30 41</mark>;`,
						`--rgb-red-700: <mark>156 23 32</mark>;`,
						`--rgb-red-800: <mark>111 16 23</mark>;`,
						`--rgb-red-900: <mark>67 10 14</mark>;`,
						`&nbsp;`,
						`--rgb-yellow-100: <mark>254 246 230</mark>;`,
						`--rgb-yellow-200: <mark>252 228 181</mark>;`,
						`--rgb-yellow-300: <mark>250 210 132</mark>;`,
						`--rgb-yellow-400: <mark>249 192 83</mark>;`,
						`--rgb-yellow-500: <mark>247 174 34</mark>;`,
						`--rgb-yellow-600: <mark>221 148 8</mark>;`,
						`--rgb-yellow-700: <mark>172 115 6</mark>;`,
						`--rgb-yellow-800: <mark>123 82 5</mark>;`,
						`--rgb-yellow-900: <mark>74 49 3</mark>;`,
						`&nbsp;`,
						`--rgb-green-100: <mark>234 250 240</mark>;`,
						`--rgb-green-200: <mark>193 241 209</mark>;`,
						`--rgb-green-300: <mark>151 232 179</mark>;`,
						`--rgb-green-400: <mark>109 222 148</mark>;`,
						`--rgb-green-500: <mark>68 213 118</mark>;`,
						`--rgb-green-600: <mark>42 187 92</mark>;`,
						`--rgb-green-700: <mark>33 146 72</mark>;`,
						`--rgb-green-800: <mark>23 104 51</mark>;`,
						`--rgb-green-900: <mark>14 62 31</mark>;`,
						`&nbsp;`,
						`--rgb-blue-100: <mark>232 2 1,253</mark>;`,
						`--rgb-blue-200: <mark>185 1 4,249</mark>;`,
						`--rgb-blue-300: <mark>139 1 7,245</mark>;`,
						`--rgb-blue-400: <mark>93 9 ,241</mark>;`,
						`--rgb-blue-500: <mark>46 4 ,238</mark>;`,
						`--rgb-blue-600: <mark>21 1 ,212</mark>;`,
						`--rgb-blue-700: <mark>16 1 ,165</mark>;`,
						`--rgb-blue-800: <mark>11 1 ,118</mark>;`,
						`--rgb-blue-900: <mark>7 6 71</mark>;`,
						`&nbsp;`,
						`--rgb-purple-100: <mark>241 232 252</mark>;`,
						`--rgb-purple-200: <mark>213 186 247</mark>;`,
						`--rgb-purple-300: <mark>185 140 242</mark>;`,
						`--rgb-purple-400: <mark>157 94 237</mark>;`,
						`--rgb-purple-500: <mark>128 48 232</mark>;`,
						`--rgb-purple-600: <mark>103 23 207</mark>;`,
						`--rgb-purple-700: <mark>80 18 161</mark>;`,
						`--rgb-purple-800: <mark>57 13 115</mark>;`,
						`--rgb-purple-900: <mark>34 8 69</mark>;`,
						`&nbsp;`,
						`--rgb-pink-100: <mark>252 233 244</mark>;`,
						`--rgb-pink-200: <mark>246 188 223</mark>;`,
						`--rgb-pink-300: <mark>239 143 201</mark>;`,
						`--rgb-pink-400: <mark>233 98 179</mark>;`,
						`--rgb-pink-500: <mark>227 54 158</mark>;`,
						`--rgb-pink-600: <mark>201 28 132</mark>;`,
						`--rgb-pink-700: <mark>157 22 103</mark>;`,
						`--rgb-pink-800: <mark>112 16 73</mark>;`,
						`--rgb-pink-900: <mark>67 9 44</mark>;`,
					]}
				>
					<P>
						Colors are defined as <code>RGB</code> values, see{" "}
						<Link href="/colors">
							<a>details</a>
						</Link>
						.
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
