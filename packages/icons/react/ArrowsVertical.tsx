import type { SVGProps } from "react"
const SvgArrowsVertical = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M17 16a1 1 0 0 1 0 1.414l-5 5-5-5A1 1 0 1 1 8.414 16L11 18.586V5.414L8.414 8A1 1 0 0 1 7 6.586l5-5 5 5A1 1 0 0 1 15.586 8L13 5.414v13.172L15.586 16A1 1 0 0 1 17 16"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgArrowsVertical
