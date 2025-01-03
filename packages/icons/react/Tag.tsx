import type { SVGProps } from "react"
const SvgTag = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M11.105 3.322A1.1 1.1 0 0 0 10.326 3H4.102A1.1 1.1 0 0 0 3 4.1v6.227c0 .291.116.571.322.778l10.573 10.573a1.1 1.1 0 0 0 1.557 0l6.226-6.226a1.1 1.1 0 0 0 0-1.557zM6.113 9.226a2.201 2.201 0 1 0 3.113-3.113 2.201 2.201 0 0 0-3.113 3.113"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgTag
