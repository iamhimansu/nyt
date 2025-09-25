import Application from './core/application/Application.js';
const configs = {};
const app = new Application(configs);
globalThis.Nyt = {
    app: app
};
app.boot();
app.handleRequest();
