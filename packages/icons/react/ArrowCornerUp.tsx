import type { SVGProps } from "react"
const SvgArrowCornerUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m6.707 10.414 2.586-2.586v5.086a7 7 0 0 0 7 7h3a1 1 0 1 0 0-2h-3a5 5 0 0 1-5-5V7.828l2.586 2.586 1 1A1 1 0 0 0 16.293 10l-1-1-5-5-5 5-1 1a1 1 0 1 0 1.414 1.414z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowCornerUp
