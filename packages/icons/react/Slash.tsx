import type { SVGProps } from "react"
const SvgSlash = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M3.782 18.718a1 1 0 1 0 1.415 1.414l14.849-14.85a1 1 0 1 0-1.414-1.414z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgSlash
