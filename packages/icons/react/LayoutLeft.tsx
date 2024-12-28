import type { SVGProps } from "react"
const SvgLayoutLeft = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M18 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-6 2v14h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgLayoutLeft
