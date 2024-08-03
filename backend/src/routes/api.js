const express = require('express')
const routerAPI = express.Router()
const { getProduct, postCreateProduct, getProductDetail, getProductCategory } = require('../controllers/productController')
const { getCategory } = require('../controllers/categoryController')
//route product
routerAPI.get('/product', getProduct)
routerAPI.post('/product', postCreateProduct)
routerAPI.get('/product-detail/:id', getProductDetail)
routerAPI.get('/products-category/:id', getProductCategory)
//route category
routerAPI.get('/category', getCategory)


module.exports = routerAPI