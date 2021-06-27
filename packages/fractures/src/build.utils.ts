import chalk from "chalk";
import fs from "fs";
import type {
	FractureRuleType,
	FractureFiles,
} from "fractures-library/types/css-rules";

export const generateOutput = async (
	files: FractureFiles,
	init: string,
	output: string,

	// TODO minify init too here
	isMinified?: boolean
) => {
	console.log(
		chalk.bold.green(
			`⤓ Fractures — output: ${output} isMinified: ${!!isMinified}`
		)
	);

	// Make folder
	try {
		const f: Array<string> = output.split("/");
		f.pop();
		const folder: string = f.join("/");

		if (!fs.existsSync(folder)) fs.mkdirSync(folder);
	} catch (error) {
		console.error(error);
	}

	// Generate CSS
	let html: string = init || "";

	for (const [key, value] of Object.entries(files)) {
		console.log(chalk.yellow(`  ↘ Writing CSS for ${key}`));

		value.forEach((declaration: FractureRuleType) => {
			console.log(
				chalk.gray(`    | rules for .${declaration.selector}.`)
			);

			const space: string = isMinified ? "" : " ";
			const newLine: string = isMinified ? "" : "\n";

			html += `.${declaration.selector}${space}{${declaration.property}:${space}${declaration.value};}${newLine}`;
		});
	}

	await fs.writeFileSync(output, html);
	await fs.stat(output, (err, stats) => {
		if (err) {
			console.log(`File doesn't exist.`);
		} else {
			const file: string | undefined = output?.split("/").pop();

			console.log(chalk.green(`⤒ ${file}: ${stats?.size} bytes`));
		}
	});
};
