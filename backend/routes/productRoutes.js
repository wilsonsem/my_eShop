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
    .catch((err)=>{
        res.json(err)
    })


}))

export default router