const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

// Route xử lý thanh toán
router.post('/checkout', authMiddleware, checkoutController.checkout);

module.exports = router;
