export {}

const fs = require("fs")

const ICONS_DIRECTORY = "./src/icons/" as const
const ICON_DIST = "./meta.ts" as const

const FILE_BEFORE = "export const meta = [\n" as const
const FILE_AFTER = "] as const;\n" as const

let icons: string = ""
let fileContent: string = ``

fs.readdir(ICONS_DIRECTORY, (error: string, files: Array<string>) => {
	if (error) throw error

	files.forEach((file) => {
		const fileName: string = file.split(".")[0]
		const fileExt: string = file.split(".")[1]

		if (!file && fileExt !== "svg") return

		return (icons = icons + ` "${fileName}",\n`)
	})

	fileContent = `${FILE_BEFORE}${icons}${FILE_AFTER}`

	fs.writeFile(ICON_DIST, fileContent, (error: string) => {
		if (error) throw error

		return console.debug(`--- wrote ${ICON_DIST}.`)
	})
})
