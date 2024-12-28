import type { SVGProps } from "react"
const SvgArrowBarLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M5 4a1 1 0 0 0-2 0v16a1 1 0 1 0 2 0z" clipRule="evenodd" />
		<path d="M9.828 11H20a1 1 0 1 1 0 2H9.828l3.586 3.586A1 1 0 0 1 12 18l-6-6 6-6a1 1 0 1 1 1.414 1.414z" />
	</svg>
)
export default SvgArrowBarLeft
