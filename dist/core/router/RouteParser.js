import Inflector from "../helpers/Inflector.js";
import { empty } from "../helpers/Utils.js";
class RouteParser {
    url;
    path;
    parsed;
    filtered;
    queryParams;
    constructor(url) {
        this.url = url;
        this.path = '';
        this.parsed = {};
        this.filtered = [];
        this.queryParams = { k: 'l' };
        this.parse();
    }
    parse() {
        //Sanitize the path
        this.path = this.url.replace(/^\/+|\/+$/g, "");
        //Split the path into array
        const extracted = this.path.split('/');
        //filter empty values
        this.filtered = extracted.filter((i) => { return !empty(i); });
        //convert value in camel and store in a key, value pairs
        this.parsed = this.filtered.reduce((acc, i) => {
            acc[i] = Inflector.camelize(i);
            return acc;
        }, this.parsed);
        this.path = '';
        this.queryParams = { k: 'l' };
    }
    getModule() {
        return this.getParsedAt(0);
    }
    getController() {
        return this.getParsedAt(1);
    }
    getAction() {
        return this.getParsedAt(2);
    }
    getParsedAt(index) {
        const key = this.filtered[index];
        if (typeof key !== "undefined") {
            return this.parsed[key];
        }
        return undefined;
    }
}
export default RouteParser;
