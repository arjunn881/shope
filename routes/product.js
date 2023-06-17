import express from "express";
import { verifyTokenAndAdmin } from "./verifyToken.js";
import { AddProduct } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get('/all', (req,res)=>{
    console.log("product API....");
    res.status(200).jsonp("Product Api...........s")

})

productRouter.post('/', verifyTokenAndAdmin, AddProduct);

export default productRouter;
