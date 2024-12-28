import type { SVGProps } from "react"
const SvgCircleHalf = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M12 16V8a4 4 0 1 0 0 8m6-4a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clipRule="evenodd" />
	</svg>
)
export default SvgCircleHalf
