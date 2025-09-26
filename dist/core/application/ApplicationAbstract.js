import Application from "./Application.js";
import express from 'express';
import {} from "express";
import path from "path";
import { fileURLToPath } from "url";
import Router from "../router/Router.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class ApplicationAbstract {
    basePath;
    module;
    controller;
    expressClass;
    express;
    router;
    configs;
    constructor(configs) {
        this.configs = configs;
        this.expressClass = express;
        this.express = this.expressClass();
        this.basePath = __dirname;
        this.router = new Router(this.expressClass.Router());
    }
    getExpress() {
        return this.express;
    }
    getExpressClass() {
        return this.expressClass;
    }
    getRouter() {
        return this.router.getRouter();
    }
    boot() { return this; }
    handleRequest() {
        return this;
    }
}
export default ApplicationAbstract;
