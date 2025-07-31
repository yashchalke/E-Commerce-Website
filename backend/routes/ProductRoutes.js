const express = require('express');
const {NewProductController,GetProductController,NewArrivalsController, TopSellingController} = require('../Controllers/ProductController');
const AuthMiddleware = require('../middlewares/Authmiddleware');

const router = express.Router();

router.post('/new-product',NewProductController);
router.get('/all-products',GetProductController);
router.get('/newarrivals',AuthMiddleware ,NewArrivalsController);
router.get('/topselling',TopSellingController);

module.exports = router;