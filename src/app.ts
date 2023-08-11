import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { dbConnect } from './app/utlis/dbConnect';

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db connection

dbConnect();

// we will import routs here


// default routers


//custom routes patch

export { app };

