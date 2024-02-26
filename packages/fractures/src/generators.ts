import type { FractureRuleType, FractureFiles } from "./types/meta"
import { writeFile } from "./utils"

// generates all the rules for the declarations
export const _generateRule = (fractureRule: FractureRuleType): string => {
	const declarations: Array<[string, string]> = Object.entries(fractureRule.declarations || {})
	const hasMultipleDeclarations: boolean = declarations.length > 1

	const declarationSpace: string = hasMultipleDeclarations ? "\n" : ""
	const declarationOutput: string = declarations
		.map((prop) => {
			const property: string = prop[0].replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)

			return `${property}: ${prop[1]};`
		})
		.join(declarationSpace)

	const rule: string = `${fractureRule.selector} {${declarationSpace}${declarationSpace}${declarationOutput}${declarationSpace}}`
	const selector: string = `.${rule}\n`

	return selector
}

export const _generateRules = (rules: Array<FractureRuleType>): string => {
	let css: string = ""

	rules.forEach((rule: FractureRuleType) => {
		css += _generateRule(rule)
	})

	return css
}

// generates a new fractures file
export const generateOutput = (files: FractureFiles, init: string, folder: string) => {
	const rules = Object.values(files).flatMap((x) => x)
	const css: string = `
		${init}
    ${_generateRules(rules)}
	`

	const fractures: string = css.replace(/\s/g, "")

	return writeFile(folder, fractures)
}
