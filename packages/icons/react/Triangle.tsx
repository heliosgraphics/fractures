import type { SVGProps } from "react"
const SvgTriangle = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path d="m12 4 9 15H3z" />
	</svg>
)
export default SvgTriangle
