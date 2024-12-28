import type { SVGProps } from "react"
const SvgArrowCircleUp = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<g fillRule="evenodd" clipRule="evenodd">
			<path d="M11 10.414 8.414 13A1 1 0 0 1 7 11.586l5-5 5 5A1 1 0 0 1 15.586 13L13 10.414V17a1 1 0 1 1-2 0z" />
			<path d="M4 12a8 8 0 1 0 16 0 8 8 0 0 0-16 0m-2 0c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12" />
		</g>
	</svg>
)
export default SvgArrowCircleUp
