import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'

dotenv.config()



const app = express()


app.get('/', (req,res) => {
    res.send('API is running ....')
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
    console.log(`Eshop running in ${process.env.NODE_ENV} environment on port ${PORT}`)
})