import chalk from "chalk";
import fs from "fs";
import type {
	FractureRuleType,
	FractureFiles,
} from "fractures-library/types/css-rules";

export const makeFolder = (openFolder: string): string | void => {
	if (!openFolder) return;

	try {
		const f: Array<string> = openFolder.split("/");
		const fileName: string = f.pop() || "";
		const folder: string = f.join("/");

		if (!fs.existsSync(folder)) fs.mkdirSync(folder);

		return fileName;
	} catch (error) {
		return console.error(error);
	}
};

export const generateOutput = async (
	files: FractureFiles,
	init: string,
	folder: string,
	isMinified?: boolean
) => {
	console.log(
		chalk.bold.green(`⤓ Fractures — folder: ${folder} min: ${!!isMinified}`)
	);

	const fileName: string = makeFolder(folder) || ".";
	let html: string = init || "";

	for (const [key, value] of Object.entries(files)) {
		console.log(chalk.yellow(`  ↘ Writing CSS for ${key}`));

		value.forEach((declaration: FractureRuleType) => {
			console.log(chalk.gray(`    | rules for ${declaration.selector}.`));

			// prettier-ignore
			const declarations: Array<[string, string]> = Object.entries(declaration.declarations);
			const hasMultipleDeclarations: boolean = declarations.length > 1;
			const declarationSpace: string = hasMultipleDeclarations
				? "\n"
				: "";
			const declarationOutput: string = declarations
				.map((prop) => {
					const property: string = prop[0].replace(
						/[A-Z]/g,
						(letter) => `-${letter.toLowerCase()}`
					);

					return `${property}: ${prop[1]};`;
				})
				.join(hasMultipleDeclarations ? "\n" : "");

			html += `${declaration.selector} {${declarationSpace}${declarationOutput}${declarationSpace}};\n`;
		});
	}

	const fractures: string = isMinified ? html.replace(/\s/g, "") : html;

	fs.writeFileSync(folder, fractures);
	fs.stat(folder, (error, stats) => {
		if (error) {
			console.log(chalk.red(`File doesn't exist.`));
		} else {
			console.log(chalk.green(`⤒ ${fileName}: ${stats?.size} bytes`));
		}
	});
};
