import type { SVGProps } from "react"
const SvgArrowBarRight = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path fillRule="evenodd" d="M19 20a1 1 0 1 0 2 0V4a1 1 0 1 0-2 0z" clipRule="evenodd" />
		<path d="M14.172 13H4a1 1 0 1 1 0-2h10.172l-3.586-3.586A1 1 0 0 1 12 6l6 6-6 6a1 1 0 0 1-1.414-1.414z" />
	</svg>
)
export default SvgArrowBarRight
