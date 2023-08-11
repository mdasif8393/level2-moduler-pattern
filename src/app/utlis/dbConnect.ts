import mongoose from 'mongoose';
import { log } from './logger';
const { URI } = process.env;

const dbConnect = async (): Promise<void> => {
    try {
        if (!URI) {
            log.error("No URI find in the env file");
            process.exit();
        }
        await mongoose.connect(URI)
        log.info("Database is connected");
    }
    catch (err: any) {
        log.error(err.message);
    }
}

export { dbConnect };