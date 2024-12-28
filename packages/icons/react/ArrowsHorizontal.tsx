import type { SVGProps } from "react"
const SvgArrowsHorizontal = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M16 7a1 1 0 0 1 1.414 0l5 5-5 5A1 1 0 0 1 16 15.586L18.586 13H5.414L8 15.586A1 1 0 1 1 6.586 17l-5-5 5-5A1 1 0 0 1 8 8.414L5.414 11h13.172L16 8.414A1 1 0 0 1 16 7"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowsHorizontal
