import type { SVGProps } from "react"
const SvgArrowBarDown = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M4 19a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2z" clipRule="evenodd" />
		<path d="M11 14.172V4a1 1 0 1 1 2 0v10.172l3.586-3.586A1 1 0 0 1 18 12l-6 6-6-6a1 1 0 1 1 1.414-1.414z" />
	</svg>
)
export default SvgArrowBarDown
