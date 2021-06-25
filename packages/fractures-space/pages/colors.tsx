import ColorsHover from "../components/ColorsHover";
import ColorsScale from "../components/ColorsScale";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import Small from "../components/Small";

const Colors: React.FC<{}> = () => (
	<Layout title="Colors">
		<PageContainer>
			<H0>Colors</H0>
			<SectionBlock title="Hover">
				<P>
					The <code>:hover</code> modifier is enabled for the
					customizable <code>color</code> and{" "}
					<code>background-color</code> properties.
				</P>
				<ColorsHover />
			</SectionBlock>
			<SectionBlock title="Colors">
				<P>
					Since{" "}
					<Link href="/config">
						<a>CSS variables</a>
					</Link>{" "}
					are defined on the CSS root level, all the customized colors
					are easily accessible directly from anywhere in the code
					with <code>var(--green-500)</code>.
				</P>
				<Small>Final 2.0 release will support color opacity.</Small>
				<div className="grid grid-cols-4 grid-gap-12">
					<ColorsScale
						mode="color"
						color="gray"
						tones={[
							0, 25, 50, 100, 200, 300, 400, 500, 600, 700, 800,
							900, 1000,
						]}
					/>
					<ColorsScale
						mode="color"
						color="red"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
					<ColorsScale
						mode="color"
						color="yellow"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
					<ColorsScale
						mode="color"
						color="green"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
					<ColorsScale
						mode="color"
						color="blue"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
					<ColorsScale
						mode="color"
						color="purple"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
					<ColorsScale
						mode="color"
						color="pink"
						tones={[100, 200, 300, 400, 500, 600, 700, 800, 900]}
					/>
				</div>
			</SectionBlock>
			<SectionBlock title="Background Colors">
				<div className="grid grid-cols-4 grid-gap-12">
					<ColorsScale
						mode="background"
						color="gray"
						tones={[
							1000, 900, 800, 700, 600, 500, 400, 300, 200, 100,
							50, 25, 0,
						]}
					/>
					<ColorsScale
						mode="background"
						color="red"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
					<ColorsScale
						mode="background"
						color="yellow"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
					<ColorsScale
						mode="background"
						color="green"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
					<ColorsScale
						mode="background"
						color="blue"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
					<ColorsScale
						mode="background"
						color="purple"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
					<ColorsScale
						mode="background"
						color="pink"
						tones={[900, 800, 700, 600, 500, 400, 300, 200, 100]}
					/>
				</div>
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default Colors;
