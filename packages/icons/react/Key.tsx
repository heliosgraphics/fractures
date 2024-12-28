import type { SVGProps } from "react"
const SvgKey = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M11.143 14.8a5 5 0 1 1 .44-4.8h9.75a.25.25 0 0 1 .231.154l.417 1a.3.3 0 0 1 .019.096v1.06a.25.25 0 0 1-.058.16l-1.867 2.24a.25.25 0 0 1-.192.09h-.766a.25.25 0 0 1-.192-.09l-.733-.88a.25.25 0 0 0-.384 0l-.733.88a.25.25 0 0 1-.192.09h-.766a.25.25 0 0 1-.192-.09l-.733-.88a.25.25 0 0 0-.384 0l-.733.88a.25.25 0 0 1-.192.09zM10 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgKey
