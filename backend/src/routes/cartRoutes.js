const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middleware/auth'); // Middleware bảo vệ route

router.get('/cart', auth, cartController.getCartItems);
router.post('/cart', auth, cartController.addToCart);
router.put('/cart/:id', auth, cartController.updateCartItem);
router.delete('/cart/:id', auth, cartController.deleteCartItem);
router.put('/cart/:id', auth, cartController.updateCartItem);

module.exports = router;
