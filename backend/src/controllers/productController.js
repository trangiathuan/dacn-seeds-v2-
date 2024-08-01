const Product = require('../models/product')

const getProduct = async (req, res) => {
    let results = await Product.find({})
    return res.status(200).json({
        errCode: 0,
        data: results
    })
}

const postCreateProduct = async (req, res) => {
    let productName = req.body.productName;
    let categoryID = req.body.categoryID;
    let description = req.body.description;
    let price = req.body.price;
    let quantity = req.body.quantity;
    let image = req.body.image;
    let product = await Product.create({
        productName: productName,
        categoryID: categoryID,
        description: description,
        price: price,
        quantity: quantity,
        image: image
    })
    return res.status(200).json({
        errCode: 0,
        data: product
    })
}

module.exports = {
    getProduct,
    postCreateProduct
}