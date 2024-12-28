import type { SVGProps } from "react"
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M5 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V5h8V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V5h1a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h1zM4 19V9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1m2.5-8a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCalendar
