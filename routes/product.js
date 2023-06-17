import express from "express";
import { verifyTokenAndAdmin } from "./verifyToken.js";
import { AddProduct, deleteProduct, getAllProduct, updateProduct } from "../controllers/product.js";

const productRouter = express.Router();

productRouter.get('/all', (req,res)=>{
    console.log("product API....");
    res.status(200).jsonp("Product Api...........s")

})

productRouter.post('/', verifyTokenAndAdmin, AddProduct);
productRouter.get('/', verifyTokenAndAdmin, updateProduct)
productRouter.get('/',verifyTokenAndAdmin, deleteProduct);


productRouter.get('/',getAllProduct)
export default productRouter;
