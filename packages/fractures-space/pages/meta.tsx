import ColorsHover from "../components/ColorsHover";
import ColorsScale from "../components/ColorsScale";
import H0 from "../components/H0";
import Layout from "../components/Layout";
import Link from "next/link";
import P from "../components/P";
import PageContainer from "../components/PageContainer";
import SectionBlock from "../components/SectionBlock";
import SectionGrid from "../components/SectionGrid";
import {colorOpacity} from "fractures-library/src/rules/colorOpacity";

const Meta: React.FC<{}> = () => (
	<Layout title="Colors">
		<PageContainer>
			<div className='bg-gray-0 gray-0'>Gray</div>
			<div className='bg-gray-100 gray-100'>Gray 100</div>
			<div className='bg-gray-200 gray-200'>Gray 200</div>
			<div className='bg-gray-300 gray-300'>Gray 300</div>
			<div className='bg-gray-400 gray-400'>Gray 400</div>
			<div className='bg-gray-500 gray-500'>Gray 500</div>
			<div className='bg-gray-600 gray-600'>Gray 600</div>
			<div className='bg-gray-700 gray-700'>Gray 700</div>
			<div className='bg-gray-800 gray-800'>Gray 800</div>
			<div className='bg-gray-900 gray-900'>Gray 900</div>
			<div className='bg-gray-1000 gray-1000'>Gray 1000</div>
		</PageContainer>
	</Layout>
);

export default Meta;
