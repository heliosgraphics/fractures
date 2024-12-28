import type { SVGProps } from "react"
const SvgFile = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1h-5a1 1 0 0 1-1-1V4a1 1 0 0 0-1-1zm10.5 2.5L14 3v4a1 1 0 0 0 1 1h4z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgFile
