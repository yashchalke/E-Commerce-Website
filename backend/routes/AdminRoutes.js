const express = require('express');
const router = express.Router();
const { getAdminStats } = require('../Controllers/AdminController');

const {verifyAdmin} = require('../middlewares/verifyadmin'); 

router.get('/stats', verifyAdmin, getAdminStats); 

module.exports = router;