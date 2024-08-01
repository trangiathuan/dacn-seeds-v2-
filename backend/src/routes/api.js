const express = require('express')
const routerAPI = express.Router()
const { getProduct, postCreateProduct } = require('../controllers/productController')

//route product
routerAPI.get('/product', getProduct)
routerAPI.post('/product', postCreateProduct)

module.exports = routerAPI