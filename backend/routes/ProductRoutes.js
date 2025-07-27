const express = require('express');
const {NewProductController,GetProductController} = require('../Controllers/ProductController')

const router = express.Router();

router.post('/new-product',NewProductController);
router.get('/all-products',GetProductController)

module.exports = router;