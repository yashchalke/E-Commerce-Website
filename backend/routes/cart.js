// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../db/Models/Cart');

// Save or update cart
router.post('/save', async (req, res) => {
  const { userId, items } = req.body;

  console.log('Received cart data:', userId, items); // ✅ Debug log

  try {
    let cart = await Cart.findOne({ userId });
    if (cart) {
      cart.items = items;
    } else {
      cart = new Cart({ userId, items });
    }
    await cart.save();
    res.status(200).json({ message: 'Cart saved successfully' });
  } catch (err) {
    console.error('Cart save error:', err); // ✅ Error log
    res.status(500).json({ error: 'Failed to save cart' });
  }
});

// Get cart
router.get('/:userId', async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart || { items: [] });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cart' });
  }
});

module.exports = router;