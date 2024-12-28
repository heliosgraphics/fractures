import type { SVGProps } from "react"
const SvgLock = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M8 12h8v-2a4 4 0 0 0-8 0zm11 0v7a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-9a7 7 0 0 1 14 0z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgLock
