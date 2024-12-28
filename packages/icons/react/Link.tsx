import type { SVGProps } from "react"
const SvgLink = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M4 12a4 4 0 0 1 4-4h2a1 1 0 1 0 0-2H8a6 6 0 1 0 0 12h2a1 1 0 1 0 0-2H8a4 4 0 0 1-4-4m10-6a1 1 0 1 0 0 2h2a4 4 0 0 1 0 8h-2a1 1 0 1 0 0 2h2a6 6 0 0 0 0-12zm-6 5a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgLink
