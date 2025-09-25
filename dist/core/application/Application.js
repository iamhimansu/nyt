import ApplicationAbstract from "./ApplicationAbstract.js";
import express from 'express';
class Application extends ApplicationAbstract {
    boot() {
        console.log('Booted...');
        const port = 8080;
        this.express.listen(port, () => {
            console.log(`Application listening on port: ${port} http://localhost:${port}`);
        });
        return this;
    }
    handleRequest() {
        this.express.use((req, res, next) => {
            console.log(req.path);
            console.log(Nyt.app.basePath);
            next();
        });
        return this;
    }
}
export default Application;
