import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const getProducts = asyncHandler(async(req , res) => {

    const products = await Product.find({})

    res.json(products)
    
})


const getProductById = asyncHandler(async(req , res) => {

    const{ id } = req.params
    const singleProduct = await Product.findById(id)

    .then((singleProduct)=>{
        res.json(singleProduct)
    })
    .catch((error)=>{
        res.status(404)
        throw new Error("product not found at all")
        // res.json({message:"Product not found"})
    })
    
})

export { getProducts, getProductById }