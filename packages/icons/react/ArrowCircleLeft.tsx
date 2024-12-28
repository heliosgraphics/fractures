import type { SVGProps } from "react"
const SvgArrowCircleLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<g fillRule="evenodd" clipRule="evenodd">
			<path d="M10.414 13 13 15.586A1 1 0 0 1 11.586 17l-5-5 5-5A1 1 0 1 1 13 8.414L10.414 11H17a1 1 0 1 1 0 2z" />
			<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16m0 2c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10" />
		</g>
	</svg>
)
export default SvgArrowCircleLeft
