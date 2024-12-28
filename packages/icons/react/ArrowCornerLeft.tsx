import type { SVGProps } from "react"
const SvgArrowCornerLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="m10.414 17.293-2.586-2.586h5.086a7 7 0 0 0 7-7v-3a1 1 0 1 0-2 0v3a5 5 0 0 1-5 5H7.828l2.586-2.586 1-1A1 1 0 0 0 10 7.707l-1 1-5 5 5 5 1 1a1 1 0 0 0 1.414-1.414z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowCornerLeft
