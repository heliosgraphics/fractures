import type { SVGProps } from "react"
const SvgMoon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M19.2 14.55c.15-.423-.34-.76-.748-.573a6.364 6.364 0 0 1-8.428-8.428c.185-.409-.151-.899-.574-.75a7.636 7.636 0 1 0 9.75 9.75"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgMoon
