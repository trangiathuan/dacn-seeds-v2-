const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/orderController');
const authOrder = require('../middleware/authOrder');

// Route xử lý thanh toán
router.post('/checkout', authOrder, checkoutController.checkout);

module.exports = router;
