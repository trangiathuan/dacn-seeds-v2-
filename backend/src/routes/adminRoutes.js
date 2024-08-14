// routes/admin.js
const express = require('express');
const router = express.Router();
const authAdmin = require('../middleware/authAdmin');
const adminController = require('../controllers/adminController')

// Route dành cho admin
router.get('/getAllProduct', authAdmin, adminController.getAllProducts);

module.exports = router;
