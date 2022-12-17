import express from 'express'
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
const router = express.Router()

//fetch all products
router.get('/', asyncHandler(async(req, res) => {

    const products = await Product.find({})

   
    res.json(products)
}))

//fetch a single product
router.get('/:id', asyncHandler(async(req, res) => {

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

    // if(singleProduct){
    //     res.json(singleProduct)
    // }
    // else {
    //     res.status(404)
    //     throw new Error('Product not ound')
    // }


}))

export default router