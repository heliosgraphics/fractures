import styled from "styled-components";
import Small from "../Small";
import type { BreakPointChartProps } from "./BreakPointChart.types";
import type React from "react";

const BreakPointChartMarkup: React.FC<BreakPointChartProps> = (props) => (
	<div className={`${props.className} flex flex-column flex-gap-8`}>
		<div className="flex bg-green-500 green-100 radius-2 space-between p-2">
			<div className="none flex-gap-4 flex-y-center wp-25 sm:flex">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					sm:flex
				</Small>
				<Small className="green-900">0px</Small>
			</div>
			<div className="flex flex-gap-4 flex-y-center wp-25 sm:none">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					sm:none
				</Small>
				<Small className="green-900">444px</Small>
			</div>
			<div className="flex flex-gap-4 flex-y-center wp-25 md:none">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					md:none
				</Small>
				<Small className="green-900">696px</Small>
			</div>
			<div className="flex flex-gap-4 flex-y-center wp-25 lg:none">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					lg:none
				</Small>
				<Small className="green-900">864px</Small>
			</div>
			<div className="flex flex-gap-4 flex-y-center wp-25 xl:none">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					xl:none
				</Small>
				<Small className="green-900">1032px</Small>
			</div>
			<div className="flex flex-gap-4 flex-y-center wp-25 xxl:none">
				<Small className="bg-green-900 green-100 radius-1 px-3 py-1 mono">
					xxl:none
				</Small>
				<Small className="green-900">1360px</Small>
			</div>
		</div>
		<div className="bar-container flex flex-column flex-gap-2 overflow-hidden">
			<div className="bar-xxl wpmax-100 h-2 bg-green-300 radius-1" />
			<div className="bar-xl wpmax-100 h-2 bg-green-400 radius-1" />
			<div className="bar-lg wpmax-100 h-2 bg-green-500 radius-1" />
			<div className="bar-md wpmax-100 h-2 bg-green-600 radius-1" />
			<div className="bar-sm wpmax-100 h-2 bg-green-700 radius-1" />
		</div>
	</div>
);

// prettier-ignore
const BreakPointChart = styled(BreakPointChartMarkup)`
	.bar-sm {width: 444px;}
	.bar-md {width: 696px;}
	.bar-lg {width: 864px;}
	.bar-xl {width: 1032px;}
	.bar-xxl {width: 1360px;}

	@media (max-width: 1360px) {.bar-xxl {background-color: var(--purple-300);}}
	@media (max-width: 1032px) {.bar-xl {background-color: var(--purple-400);}}
	@media (max-width: 864px) {.bar-lg {background-color: var(--purple-500);}}
	@media (max-width: 696px) {.bar-md {background-color: var(--purple-600);}}
	@media (max-width: 444px) {.bar-sm {background-color: var(--purple-700);}}
`

export default BreakPointChart;
