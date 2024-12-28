import type { SVGProps } from "react"
const SvgCircleFull = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M18 12a6 6 0 1 1-12 0 6 6 0 0 1 12 0" clipRule="evenodd" />
	</svg>
)
export default SvgCircleFull
