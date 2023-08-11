import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { dbConnect } from './app/utlis/dbConnect';
import productRoute from './app/modules/product/product.route';

const app: Application = express();

//using cors
app.use(cors());

//parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//db connection

// render ejs
app.set("view engine", "ejs");

dbConnect();

// we will import routs here


// default routers
app.get("/", (req:Request, res:Response) => {
    res.send("Welcome to modular express app")
})

//custom routes patch
app.use("/api/v1/products", productRoute);

export { app };

