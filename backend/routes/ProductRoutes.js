const express = require('express');
const {NewProductController,GetProductController,NewArrivalsController} = require('../Controllers/ProductController')

const router = express.Router();

router.post('/new-product',NewProductController);
router.get('/all-products',GetProductController);
router.get('/newarrivals',NewArrivalsController);

module.exports = router;