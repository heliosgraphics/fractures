import type { SVGProps } from "react"
const SvgBook = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M6 6a2 2 0 0 1 2-2h8v2H9a1 1 0 0 0 0 2h8a1 1 0 0 1 1 1v11.5a.5.5 0 0 1-.5.5H7a1 1 0 0 1-1-1z"
			clipRule="evenodd"
		/>
		<path d="M14 4h2a1 1 0 1 1 0 2h-2z" />
	</svg>
)
export default SvgBook
