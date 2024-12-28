import type { SVGProps } from "react"
const SvgArrowsSwitch = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m6.828 9 3.586-3.586A1 1 0 0 0 9 4l-7 7h19a1 1 0 1 0 0-2zm10.344 6-3.586 3.586A1 1 0 0 0 15 20l7-7H3a1 1 0 1 0 0 2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowsSwitch
