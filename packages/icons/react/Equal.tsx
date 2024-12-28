import type { SVGProps } from "react"
const SvgEqual = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5 8a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2zm0 6a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgEqual
