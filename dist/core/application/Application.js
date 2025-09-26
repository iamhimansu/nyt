import ApplicationAbstract from "./ApplicationAbstract.js";
class Application extends ApplicationAbstract {
    boot() {
        console.log('Booted...');
        const port = 8080;
        this.getExpress().listen(port, () => {
            console.log(`Application listening on port: ${port} http://localhost:${port}`);
        });
        return this;
    }
    handleRequest() {
        this.getExpress().use(this.getRouter());
        return this;
    }
}
export default Application;
