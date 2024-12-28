import type { SVGProps } from "react"
const SvgPicture = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm4 4-4 5v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4l-4-3-4 3z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgPicture
