import type { SVGProps } from "react"
const SvgEye = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M22 12c0 2-4 7-10 7S2 14 2 12s4-7 10-7 10 5 10 7m-5 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5 3a3 3 0 0 0 2.708-4.293 1 1 0 1 1-1.414-1.414A3 3 0 1 0 12 15"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgEye
