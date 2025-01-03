import type { SVGProps } from "react"
const SvgLocation = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 22c2 0 8-7 8-12a8 8 0 1 0-16 0c0 5 6 12 8 12m0-8a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgLocation
