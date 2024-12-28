import type { SVGProps } from "react"
const SvgArrowBarUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M20 5a1 1 0 1 0 0-2H4a1 1 0 0 0 0 2z" clipRule="evenodd" />
		<path d="M13 9.828V20a1 1 0 1 1-2 0V9.828l-3.586 3.586A1 1 0 0 1 6 12l6-6 6 6a1 1 0 0 1-1.414 1.414z" />
	</svg>
)
export default SvgArrowBarUp
