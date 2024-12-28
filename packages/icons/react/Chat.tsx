import type { SVGProps } from "react"
const SvgChat = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12.828 15 15 17.172 17.172 15H20V7H4v8zM15 20l-3-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2z"
			clipRule="evenodd"
		/>
		<path d="M7 12a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2z" />
	</svg>
)
export default SvgChat
