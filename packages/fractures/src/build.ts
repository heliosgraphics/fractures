import { generateOutput } from "./generators";
import { fractureFiles } from "fractures-library/src/index";
import { reset } from "fractures-library/src/config/reset";
import { root } from "fractures-library/src/config/root";

generateOutput(fractureFiles, root + reset, "dist/fractures.css", true);
generateOutput(fractureFiles, root + reset, "dist/fractures.dev.css", false);
