import type { SVGProps } from "react"
const SvgRect = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path d="M2 5h20v14H2z" />
	</svg>
)
export default SvgRect
