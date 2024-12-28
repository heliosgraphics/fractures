import type { SVGProps } from "react"
const SvgGrab = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M7 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m4-14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m2 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgGrab
