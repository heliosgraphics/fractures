import type { SVGProps } from "react"
const SvgChevronLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m9.828 12 5.586-5.586A1 1 0 0 0 14 5l-7 7 7 7a1 1 0 0 0 1.414-1.414z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgChevronLeft
