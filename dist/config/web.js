import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const configs = {
    basePath: __dirname,
    modules: {
        examination: {
            path: "/modules/dashboard/Module"
        }
    }
};
export default configs;
