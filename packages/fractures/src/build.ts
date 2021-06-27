import { generateOutput } from "./build.utils";
import { fractureFiles } from "fractures-library/src/index";
import { reset } from "fractures-library/src/config/reset";
import { root } from "fractures-library/src/config/root";

generateOutput(fractureFiles, root + reset, "dist2/fractures.css");
generateOutput(fractureFiles, root + reset, "dist2/fractures.min.css", true);
