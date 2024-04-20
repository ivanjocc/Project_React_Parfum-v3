const express = require('express');
const multer = require('multer');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.post('/', productController.createProduct);

module.exports = router;
