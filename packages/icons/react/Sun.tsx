import type { SVGProps } from "react"
const SvgSun = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m-7-7a1 1 0 0 0-1-1H2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1m18 0a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1M6.536 6.536a1 1 0 0 0 0-1.415L5.12 3.707a1 1 0 1 0-1.414 1.414L5.12 6.536a1 1 0 0 0 1.415 0m14 14a1 1 0 0 1-1.415 0l-1.414-1.415a1 1 0 0 1 1.414-1.414l1.415 1.414a1 1 0 0 1 0 1.415m-2.829-14a1 1 0 0 0 1.414 0l1.415-1.415a1 1 0 1 0-1.415-1.414l-1.414 1.414a1 1 0 0 0 0 1.415m-14 14a1 1 0 0 1 0-1.415l1.414-1.414a1 1 0 0 1 1.415 1.414L5.12 20.536a1 1 0 0 1-1.414 0M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10"
			clipRule="evenodd"
		/>
	</svg>
)
export default SvgSun
