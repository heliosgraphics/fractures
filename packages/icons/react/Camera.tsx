import type { SVGProps } from "react"
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M8 4h-.5a.5.5 0 0 0-.5.5V7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3V4.5a.5.5 0 0 0-.5-.5zm9 9a5 5 0 1 1-10 0 5 5 0 0 1 10 0m-5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCamera
