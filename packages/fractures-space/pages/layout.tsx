import BreakPointChart from "../components/BreakPointChart";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionGrid from "../components/SectionGrid";

const displayClasses: Array<[string, string]> = [
	["block", "display: block"],
	["contents", "display: contents"],
	["flex", "display: flex"],
	["flow-root", "display: flow-root"],
	["grid", "display: grid"],
	["inline", "display: inline"],
	["inline-block", "display: inline-block"],
	["inline-flex", "display: inline-flex"],
	["inline-grid", "display: inline-grid"],
	["inline-table", "display: inline-table"],
	["list-item", "display: list-item"],
	["none", "display: none"],
	["run-in", "display: run-in"],
	["table", "display: table"],
	["table-caption", "display: table-caption"],
	["table-cell", "display: table-cell"],
	["table-column", "display: table-column"],
	["table-column-group", "display: table-column-group"],
	["table-footer-group", "display: table-footer-group"],
	["table-header-group", "display: table-header-group"],
	["table-row", "display: table-row"],
	["table-row-group", "display: table-row-group"],

	["table-layout-fixed", "table-layout: fixed"],

	["float-left", "float: left"],
	["float-right", "float: right"],
];

const responsiveDisplay = [
	["xxl:inline", "display: inline @xxl"],
	["xxl:inline-block", "display: inline-block @xxl"],
	["xxl:inline-grid", "display: inline-grid @xxl"],
	["xxl:inline-flex", "display: inline-flex @xxl"],
	["xxl:grid", "display: grid @xxl"],
	["xxl:flex", "display: flex @xxl"],
	["xxl:none", "display: none @xxl"],
];

const flexClasses = [
	["flex-wrap", "flex-wrap: wrap"],
	["flex-column", "flex-direction: column"],

	["space-around", "justify-content: space-around"],
	["space-between", "justify-content: space-between"],
	["space-evenly", "justify-content: space-evenly"],

	["flex-center", "align-items: center; justify-content: center"],
	["flex-y-center", "align-items: center"],
	["flex-x-center", "justify-content: center"],

	["flex-left", "justify-content: flex-start"],
	["flex-right", "justify-content: flex-end"],
	["flex-baseline", "align-items: baseline"],
	["flex-top", "align-items: flex-start"],
	["flex-bottom", "align-items: flex-end"],

	["self-center", "align-self: center; justify-self: center"],
	["self-x-center", "justify-self: center"],
	["self-y-center", "align-self: center"],

	["self-left", "justify-self: flex-start"],
	["self-right", "justify-self: flex-end"],
	["self-baseline", "justify-self: baseline"],
	["self-top", "align-self: flex-start"],
	["self-bottom", "align-self: flex-end"],

	["flex-gap-px", "flex-gap: px"],
	["flex-gap-1", "flex-gap: 1"],
	["flex-gap-2", "flex-gap: 2"],
	["flex-gap-3", "flex-gap: 3"],
	["flex-gap-4", "flex-gap: 4"],
	["flex-gap-5", "flex-gap: 5"],
	["flex-gap-6", "flex-gap: 6"],
	["flex-gap-7", "flex-gap: 7"],
	["flex-gap-8", "flex-gap: 8"],
	["flex-gap-9", "flex-gap: 9"],
	["flex-gap-10", "flex-gap: 10"],
	["flex-gap-11", "flex-gap: 11"],
	["flex-gap-12", "flex-gap: 12"],
	["flex-gap-13", "flex-gap: 13"],
	["flex-gap-14", "flex-gap: 14"],
	["flex-gap-15", "flex-gap: 15"],
	["flex-gap-16", "flex-gap: 16"],
	["flex-gap-24", "flex-gap: 24"],
	["flex-gap-32", "flex-gap: 32"],
	["flex-gap-40", "flex-gap: 40"],
	["flex-gap-48", "flex-gap: 48"],

	["grow-1", "flex-grow: 1"],
	["grow-2", "flex-grow: 2"],
	["grow-3", "flex-grow: 3"],
	["grow-4", "flex-grow: 4"],
	["grow-5", "flex-grow: 5"],
	["grow-6", "flex-grow: 6"],
	["grow-7", "flex-grow: 7"],
	["grow-8", "flex-grow: 8"],
	["grow-9", "flex-grow: 9"],
	["grow-10", "flex-grow: 10"],
	["grow-11", "flex-grow: 11"],
	["grow-12", "flex-grow: 12"],
];

const LayoutPage: React.FC<{}> = () => (
	<Layout title="Layout">
		<PageContainer>
			<H0>Layout</H0>
			<SectionBlock title="Breakpoints">
				<P>
					Fractures has 5 predefined width modifier to help build
					responsive layouts.
					<br />
					Resize this page to see how they work.
				</P>
				<P>
					<code>
						sm:<em>class</em> md:<em>class</em> lg:<em>class</em>{" "}
						xl:<em>class</em> xxl:<em>class</em>
					</code>
				</P>
			</SectionBlock>
		</PageContainer>
		<BreakPointChart />
		<PageContainer>
			<SectionGrid title="Display" items={displayClasses} />
			<SectionGrid title="Responsive: Display" items={responsiveDisplay}>
				<P>
					Works with all 5 modifier. <br />
					<code>
						sm:<em>class</em> md:<em>class</em> lg:<em>class</em>{" "}
						xl:<em>class</em> xxl:<em>class</em>
					</code>
				</P>
			</SectionGrid>
			<SectionGrid title="Flex" items={flexClasses} />
			<SectionGrid title="Grid" items={[]} />
			<SectionGrid title="Height" items={[]} />
			<SectionGrid title="Width" items={[]} />
			<SectionGrid title="Position" items={[]} />
			<SectionGrid title="Margin" items={[]} />
			<SectionGrid title="Padding" items={[]} />
		</PageContainer>
	</Layout>
);

export default LayoutPage;
