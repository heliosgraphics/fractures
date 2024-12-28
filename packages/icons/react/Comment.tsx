import type { SVGProps } from "react"
const SvgComment = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M4 5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8l3 3 3-3h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgComment
