import Application from "./Application.js";
import express from 'express';
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
class ApplicationAbstract {
    basePath;
    module;
    controller;
    expressClass;
    express;
    constructor(configs) {
        this.expressClass = express;
        this.express = this.expressClass();
        this.basePath = __dirname;
    }
    boot() { return this; }
    handleRequest() {
        return this;
    }
}
export default ApplicationAbstract;
