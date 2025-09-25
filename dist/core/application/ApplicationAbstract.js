import Application from "./Application.js";
import express from "express";
class ApplicationAbstract {
    module;
    controller;
    #express;
    constructor(configs) {
        this.boot();
        this.#express = express();
    }
    boot() {
    }
    handle() {
        return this;
    }
}
export default ApplicationAbstract;
