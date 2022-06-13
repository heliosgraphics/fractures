import { FractureBreakpoints } from "fractures-library/types/css-rules";
import type {
  FractureRuleType,
  FractureFiles,
} from "fractures-library/types/css-rules";
import { writeFile } from "./utils";

// Generates all the rules for the declarations
export const generateRules = (
  fractureRule: FractureRuleType,
  prefix?: string
): string => {
  const declarations: Array<[string, string]> = Object.entries(fractureRule.declarations || {})
  const variables: Array<[string, string]> = Object.entries(fractureRule.variables || {})
  const hasMultipleDeclarations: boolean = (declarations.length + variables.length) > 1

  const declarationSpace: string = hasMultipleDeclarations ? "\n" : ""
  const declarationOutput: string = declarations
    .map((prop) => {
      const property: string = prop[0].replace(
        /[A-Z]/g,
        (letter) => `-${letter.toLowerCase()}`
      );

      return `${property}: ${prop[1]};`
    })
    .join(declarationSpace)

  const variablesOutput = variables.map(variable => `${variable[0]}: ${variable[1]};`)

  const pseudo: ":hover" | "" = prefix === "hover" ? ":hover" : ""
  const rule: string = `${fractureRule.selector}${pseudo} {${declarationSpace}${variablesOutput}${declarationSpace}${declarationOutput}${declarationSpace}}`;
  const selector: string = `.${prefix ? `${prefix}\\:` : ""}${rule}\n`

  return selector;
};

export const generateResponsiveRules = (
  rules: Array<FractureRuleType>
): string => {
  let css: string = "";

  const responsiveRules: Array<FractureRuleType> = rules
    .flatMap((x) => x)
    .filter((rule) => rule.hasBreakpoints);

  if (!responsiveRules.length) return css;

  // Rules for each breakpoint enum
  const breakPointsEntries = Object.entries(FractureBreakpoints);

  for (const value of breakPointsEntries) {
    css += `
			@media (max-width: ${value[1]}) {
				${responsiveRules.map((rule) => generateRules(rule, value[0])).join("")}
			}`;
  }

  return css;
};

export const generateNormalRules = (
  rules: Array<FractureRuleType>,
  prefix?: string
): string => {
  let css: string = "";

  rules.forEach((rule: FractureRuleType) => {
    css += generateRules(rule);

    if (!!prefix) css += generateRules(rule, prefix);
  });

  return css;
};

// Generates a new fractures file
export const generateOutput = (
  files: FractureFiles,
  init: string,
  folder: string
) => {
  const rules = Object.values(files).flatMap(x => x);
  const css: string = `
		${init}
		${generateNormalRules(rules, "hover")}
		${generateResponsiveRules(rules)}
	`;
  const fractures: string = css.replace(/\s/g, "")

  return writeFile(folder, fractures);
};
