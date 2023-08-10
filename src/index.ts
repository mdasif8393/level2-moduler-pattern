import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { URI } = process.env;
const port = process.env.PORT || 5000;
console.log(URI);
const dbconnect = async () : Promise<void> => {
    if(!URI){
        throw new Error("URI is not defined");
    }
    await mongoose.connect(URI)
    .then(() =>console.log("Database connected"));
}

dbconnect();

