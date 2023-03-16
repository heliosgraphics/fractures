import { config } from "@fractures/library/src/config/config";
import { fractureFiles } from "@fractures/library/src/index";
import { generateOutput } from "./generators";
import { reset } from "@fractures/library/src/config/reset";
import { writeFile } from "../src/utils";

// Generate standalone config CSS
writeFile('dist/fractures.reset.css', reset);
writeFile('dist/fractures.config.css', config);

// Generate default bundle
generateOutput(fractureFiles, config + reset, "dist/fractures.min.css");

// Generate file sets
Object.entries(fractureFiles).forEach(rules => {
  generateOutput(rules[1], '', `dist/set/${rules[0]}.css`);
})
