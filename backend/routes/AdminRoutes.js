const express = require('express');
const router = express.Router();
const { getAdminStats } = require('../Controllers/AdminController');

const {verifyAdmin} = require('../middlewares/verifyadmin'); 
const { GetOrdersController } = require('../Controllers/ProductController');

router.get('/stats', verifyAdmin, getAdminStats); 
router.get('/orders',verifyAdmin,GetOrdersController);

module.exports = router;