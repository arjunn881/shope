import Product from "../models/Product.js";

export const AddProduct = async(req,res)=>{
    const newProduct = new Product.$where(req.body);


    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err);
    }
}