const Product = require('../models/product')

const getProduct = async (req, res) => {
    try {
        const category = req.query.category;
        let products;
        if (category) {
            products = await Product.find({ category });
        } else {
            products = await Product.find();
        }
        res.json(products);
    } catch (error) {
        res.status(500).send(error);
    }
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
const getProductDetail = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        res.status(500).send('Server error');
    }
}


module.exports = {
    getProduct,
    postCreateProduct,
    getProductDetail
}