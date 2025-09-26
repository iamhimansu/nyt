import { Router as ExpressRouter } from "express";
import RouteParser from "./RouteParser.js";
class Router {
    router;
    constructor(router) {
        this.router = router;
        this.handle();
    }
    getRouter() {
        return this.router;
    }
    handle() {
        this.router.use((req, res, next) => {
            //Create route parser
            const routeParser = new RouteParser(req.path);
            //Extract module, controller, action
            let module = routeParser.getModule();
            let controller = routeParser.getController();
            let action = routeParser.getAction();
            console.log(req.path);
            next();
        });
    }
}
export default Router;
