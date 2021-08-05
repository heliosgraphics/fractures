import {
	HiOutlineFire,
	HiOutlinePuzzle,
	HiOutlineFingerPrint,
	HiOutlineCube,
	HiOutlineGlobeAlt,
	HiOutlineEyeOff,
} from "react-icons/hi";
import Button from "../components/Button";
import Fractures from "../components/Fractures";
import fracturesPackage from "fractures/package.json";
import H0 from "../components/H0";
import Label from "../components/Label";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionCode from "../components/SectionCode";
import Small from "../components/Small";

const Index: React.FC<{}> = () => (
	<Layout>
		<PageContainer>
			<header className="flex flex-gap-12 flex-column pt-12">
				<Fractures color="white" size={80} />
				<H0>
					<mark>Functional CSS</mark>, but only the good parts.
				</H0>
				<h4 className="h4 normal">
					Fractures is the <b>atomic CSS toolkit</b> that helps you create
					resilient <u>design systems</u> and <u>rapid prototypes</u> by
					providing a set of non-blocking utility classes.
				</h4>
			</header>
			<section className="flex flex-column flex-gap-8">
				<div className="flex flex-gap-8">
					<Link href="/setup">
						<a>
							<Button type="primary">Get started</Button>
						</a>
					</Link>
					<a href="https://github.com/fractures/fractures">
						<Button type="secondary">GitHub</Button>
					</a>
				</div>
				<div className="flex flex-gap-8">
					<div className="flex flex-gap-4 flex-y-center">
						<Small className="mono">
							npm i fractures
							<span className="unselectable">
								{" "}
								@ {fracturesPackage?.version}
							</span>
						</Small>
						<Label text="Beta" />
					</div>
					<Small className="mono">
						<a href="https://github.com/fractures/fractures/releases/tag/1.3.5">
							Looking for v1?
						</a>
					</Small>
				</div>
			</section>
			<SectionBlock title="Goals">
				<div className="grid grid-cols-3 grid-gap-3 mb-4">
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlineCube size={32} />
						</div>
						<div>Atomic</div>
					</h5>
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlineGlobeAlt size={32} />
						</div>
						<div>Framework agnostic</div>
					</h5>
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlineEyeOff size={32} />
						</div>
						<div>No UI</div>
					</h5>
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlineFire size={32} />
						</div>
						<div>Fast in every way</div>
					</h5>
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlineFingerPrint size={32} />
						</div>
						<div>Small cognitive load</div>
					</h5>
					<h5 className="md:flex-column flex flex-gap-8 flex-y-center h5 normal center radius-2 py-4">
						<div className="flex flex-center fr-gradient--green-to-purple h-18 w-18 purple-700 radius-2 p-6">
							<HiOutlinePuzzle size={32} />
						</div>
						<div>Tiny footprint</div>
					</h5>
				</div>
			</SectionBlock>
			<SectionBlock title="Features">
				<SectionCode
					title="Encourages composition"
					code={[
						`&lt;article className="<mark>article-block__item flex p-4</mark>"&gt;`,
						`  &lt;span/&gt;`,
						`&lt;/article&gt;`,
					]}
				>
					<P>
						No more class flooding. Do better than flex flex-wrap items-baseline
						pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white.
					</P>
				</SectionCode>
				<SectionCode
					title="Easy but powerful"
					code={[
						`&lt;header className="<mark>flex md:flex-column</mark>"&gt`,
						`  &lt;a className="<mark>blue-700 hover:blue-900</mark>"/&gt`,
						`  &lt;span/&gt`,
						`&lt;/header&gt;`,
					]}
				>
					<P>
						An <b>opinionated</b> breakpoint and <b>customizable</b> color
						system built in. No javascript.
					</P>
				</SectionCode>
				<SectionCode
					title="Extendible"
					code={[
						`&lt;div className="<mark>flex bg-gray-900</mark>"&gt`,
						`  &ltspan className="`,
						`    <mark>teal-700 hover:teal-100</mark>`,
						`    <mark>dark:teal-900</mark>`,
						`  "/&gt`,
						`&lt/div&gt`,
					]}
				>
					<P>
						Fractures was created at the <b>CSS level</b>, and it's{" "}
						<b>incomplete by design</b>. Configure CSS variables at :root and
						follow the outlined patterns with your own code.
					</P>
				</SectionCode>
			</SectionBlock>
			<SectionBlock title="Manifesto">
				<P>
					Fractures is a relaxed, long term take on design systems and
					prototyping, trying to abstract away some complexities interface
					design has to offer. You can build around it or on top of it, but
					would not replace the work you have to do.
					<br />
					<br />
					Ask a{" "}
					<a href="https://github.com/fractures/fractures/discussions">
						question
					</a>{" "}
					on GitHub, say hi on <a href="https://twitter.com/pyx">twitter</a>.
				</P>
			</SectionBlock>
		</PageContainer>
	</Layout>
);

export default Index;
