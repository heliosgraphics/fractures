import type { SVGProps } from "react"
const SvgCursor = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M9.47 17.847c-.6.8-1.858.554-2.112-.414L4.02 4.751a.598.598 0 0 1 .73-.73l12.683 3.337c.968.254 1.214 1.513.414 2.113l-3.337 2.502 5.315 5.315a.6.6 0 0 1 0 .846l-1.691 1.69a.6.6 0 0 1-.846 0l-5.315-5.314z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCursor
