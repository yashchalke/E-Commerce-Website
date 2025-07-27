const express = require('express');
const NewProductController = require('../Controllers/ProductController')

const router = express.Router();

router.post('/new-product',NewProductController);

module.exports = router;