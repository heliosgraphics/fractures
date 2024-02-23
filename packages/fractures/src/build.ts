import { borderRadius } from "./rules/border-radius"
import { config } from "./root.config"
import { cursor } from "./rules/cursor"
import { display } from "./rules/display"
import { easings } from "./root.easings"
import { flex } from "./rules/flex"
import { generateOutput } from "./generators"
import { grid } from "./rules/grid"
import { height } from "./rules/height"
import { list } from "./rules/list"
import { margin } from "./rules/margin"
import { opacity } from "./rules/opacity"
import { overflow } from "./rules/overflow"
import { padding } from "./rules/padding"
import { position } from "./rules/position"
import { reset } from "./root.reset"
import { type } from "./rules/type"
import { width } from "./rules/width"
import { writeFile } from "./utils"
import type { FractureFiles } from "./types/meta"

export const fractureFiles: FractureFiles = {
	borderRadius,
	cursor,
	display,
	flex,
	grid,
	height,
	list,
	margin,
	opacity,
	overflow,
	padding,
	position,
	type,
	width,
}

// generates standalone versions, each containing only their specific parts
writeFile("dist/fractures.reset.css", reset)
writeFile("dist/fractures.config.css", config)
writeFile("dist/fractures.easings.css", easings)

// generates the default bundle
generateOutput(fractureFiles, reset, "dist/fractures.min.css")

// generates set of files, eg.: `@heliosgraphics/fractures/dist/set/flex.css`
Object.entries(fractureFiles).forEach((rules) => {
	generateOutput(rules[1], "", `dist/set/${rules[0]}.css`)
})
