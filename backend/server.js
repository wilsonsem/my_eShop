import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import colors from 'colors'
import connectDB from './config/db.js'
import Product from './models/productModel.js'
import productRoutes from './routes/productRoutes.js'

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
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use('/api/products' , productRoutes)


const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`Eshop running in ${process.env.NODE_ENV} environment on port ${PORT}`.bgYellow.red.underline.bold)
})