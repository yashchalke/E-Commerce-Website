const express = require('express');
const {RegisterUser , LoginUser} = require('../Controllers/AuthController')
const {verifyAdmin} = require('../middlewares/verifyadmin')

const router = express.Router();

router.post('/register', RegisterUser);
router.post('/login', LoginUser);
router.get('/admin/dashboard', verifyAdmin, async (req, res) => {
  res.json({ message: 'Welcome to Admin Dashboard' });
});


module.exports = router;