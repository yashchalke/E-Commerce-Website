const express = require('express');
const {NewProductController,GetProductController,NewArrivalsController, TopSellingController , GetproductbyId,FilterController} = require('../Controllers/ProductController');
const AuthMiddleware = require('../middlewares/Authmiddleware');
const Cart = require('../db/Models/Cart')

const router = express.Router();

router.post('/new-product',NewProductController);
router.get('/all-products',GetProductController);
router.get('/newarrivals',NewArrivalsController);
router.get('/topselling',TopSellingController);
router.get('/:id',GetproductbyId);
router.post('/filter',FilterController);




module.exports = router;