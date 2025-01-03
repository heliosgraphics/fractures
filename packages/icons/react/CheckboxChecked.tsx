import type { SVGProps } from "react"
const SvgCheckboxChecked = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v.5a1 1 0 1 0 2 0V7a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 4.975-4.5H22V12a1 1 0 1 0-2 0v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm13.602.146a.5.5 0 0 0-.707 0l-6.247 6.247-2.616-2.617a.5.5 0 0 0-.707 0l-1.179 1.179a.5.5 0 0 0 0 .707l2.617 2.616 1.485 1.485c.273.273.706.284.966.024l1.414-1.415 6.246-6.246a.5.5 0 0 0 0-.707z"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgCheckboxChecked
