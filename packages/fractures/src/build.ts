import { fractureFiles } from "library/src/index";
import { generateOutput } from "./generators";
import { reset } from "./root.reset";
import { easings } from "./root.easings";
import { config } from "./root.config";
import { writeFile } from "./utils";

// Generate standalone config CSS
writeFile('dist/fractures.reset.css', reset);
writeFile('dist/fractures.config.css', config);
writeFile('dist/fractures.easings.css', easings);

// Generate default bundle
generateOutput(fractureFiles, config + reset, "dist/fractures.min.css");

// Generate file sets
Object.entries(fractureFiles).forEach(rules => {
  generateOutput(rules[1], '', `dist/set/${rules[0]}.css`);
})
