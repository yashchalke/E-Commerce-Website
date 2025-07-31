const express = require('express');
const {NewProductController,GetProductController,NewArrivalsController, TopSellingController} = require('../Controllers/ProductController');
const AuthMiddleware = require('../middlewares/Authmiddleware');

const router = express.Router();

router.post('/new-product',AuthMiddleware ,NewProductController);
router.get('/all-products',AuthMiddleware ,GetProductController);
router.get('/newarrivals',AuthMiddleware ,NewArrivalsController);
router.get('/topselling',AuthMiddleware ,TopSellingController);

module.exports = router;