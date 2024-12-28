import type { SVGProps } from "react"
const SvgWriting = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M3 7a1 1 0 0 1 0-2h18a1 1 0 1 1 0 2zm0 12a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2zm-1-5a1 1 0 0 0 1 1h16a1 1 0 1 0 0-2H3a1 1 0 0 0-1 1m1-3a1 1 0 1 1 0-2h13a1 1 0 1 1 0 2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgWriting
