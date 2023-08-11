import { app } from "./app";
import { log } from "./app/utlis/logger";

const { port } = process.env;

const startServer = async (): Promise<void> => {
    try {
        app.listen(port, () => {
            log.info(`Server is running on port ${port}`)
        })
    }
    catch (err:any) {
        log.error(err.message);
    }
}

startServer();