import Application from './core/application/Application.js';
import configs from './config/web.js';
const app = new Application(configs);
globalThis.Nyt = {
    app: app
};
app.boot();
app.handleRequest();
