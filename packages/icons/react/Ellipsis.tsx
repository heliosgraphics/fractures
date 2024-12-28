import type { SVGProps } from "react"
const SvgEllipsis = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M8 12a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgEllipsis
