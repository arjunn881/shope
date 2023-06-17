import Product from "../models/Product.js";


export const AddProduct = async(req,res)=>{
    const newProduct = new Product(req.body);


    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json(err);
    }

}


export const updateProduct = async(req,res)=>{
    

    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
            $set:req.body
        },{new:true});

        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
};


export const deleteProduct = async(req,res)=>{
    try {

        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted!!!");
        
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getProduct = async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);

        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}


export const getAllProduct = async(req,res)=>{

    const qNew = req.query.new;

    const qcategory = req.query.category;


    try {

        let products ;
        
        if(qNew){
            products = await Product.find().sort({createdAt : -1}).limit(5)
        } else if(qcategory){
            products = await Product.find({categories : {
                $in:[qcategory],
            }, });
        } else {
            products = await Product.find();
        }
        
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);
    }
}