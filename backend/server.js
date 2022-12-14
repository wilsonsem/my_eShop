import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'
// import products from './data/products.js'
// import users from './data/users.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'

dotenv.config()


connectDB()

const app = express()


app.get('/', async (req,res) => {
    // exports.getAllWorkouts = async (req, res) =>{

        // const users = await User.find({}).sort({createdAt: -1})
        const products = await Product.find({}).sort({createdAt: -1})
    
        res.status(200).json(products)
    // }
    
    // res.send("users")
})
app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {

    const{ id } = req.params
    
    const singleproduct = products.find((p) => p._id === Number(id))
    res.json(singleproduct)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Eshop running in ${process.env.NODE_ENV} environment on port ${PORT}`.bgYellow.red.underline.bold)
})