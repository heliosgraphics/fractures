import type { SVGProps } from "react"
const SvgInfo = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11m-9-6a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-1 4a1 1 0 0 1 1 1v6h1v2H9v-2h1v-5H9v-2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgInfo
