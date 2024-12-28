import type { SVGProps } from "react"
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M8.583 5a1 1 0 0 1 1.414 0l7 7-7 7a1 1 0 0 1-1.414-1.414L14.169 12 8.583 6.414a1 1 0 0 1 0-1.414"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgChevronRight
