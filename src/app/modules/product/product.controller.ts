import { NextFunction, Request, Response } from "express";
import { getAllProductsFromDB, getProductByIdFromDB } from "./product.service";
import { sendApiResponse } from "../../utlis/responseHandler";

export const getAllProducts = async(req:Request, res:Response, next:NextFunction) => {
    const products = await getAllProductsFromDB();
    sendApiResponse(res,200,true,products); 
}

export const getProductById = async(req:Request, res:Response, next:NextFunction) => {
    const {id} = req.params;
    const product = await getProductByIdFromDB(id);
    sendApiResponse(res,200,true,product); 
}