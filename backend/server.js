const express = require('express')
const products = require('./data/products')



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

app.listen(4000, () => {
    console.log("Eshop listening on port 4000")
})