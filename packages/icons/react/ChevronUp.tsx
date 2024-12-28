import type { SVGProps } from "react"
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m12 7 7 7a1 1 0 0 1-1.414 1.414L12 9.828l-5.586 5.586A1 1 0 0 1 5 14z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgChevronUp
