const express = require('express');
const {NewProductController,GetProductController,NewArrivalsController, TopSellingController} = require('../Controllers/ProductController')

const router = express.Router();

router.post('/new-product',NewProductController);
router.get('/all-products',GetProductController);
router.get('/newarrivals',NewArrivalsController);
router.get('/topselling',TopSellingController);

module.exports = router;