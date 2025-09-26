import { empty } from "../helpers/utils.js";
class RouteParser {
    url;
    path;
    queryParams;
    constructor(url) {
        this.url = url;
        this.path = '';
        this.queryParams = { k: 'l' };
        this.parse();
    }
    parse() {
        //Sanitize the path
        this.path = this.url.replace(/^\/+|\/+$/g, "");
        //Split the path into array
        const extracted = this.path.split('/');
        //filter empty values
        const filtered = extracted.filter((i) => { return !empty(i); });
        //convert value in slug
        console.log(filtered);
        this.path = '';
        this.queryParams = { k: 'l' };
    }
    getModule() {
    }
    getController() {
    }
    getAction() {
    }
}
export default RouteParser;
