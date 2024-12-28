import type { SVGProps } from "react"
const SvgHome = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M22 12 12 3 2 12h3v9h5v-6.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V21h5v-9z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgHome
