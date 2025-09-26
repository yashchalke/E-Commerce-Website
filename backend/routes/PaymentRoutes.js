const express = require('express');
const router = express.Router();
const { CheckoutController } = require('../Controllers/CheckoutController');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const Order = require("../db/Models/Order")
const Cart = require("../db/Models/Cart")

router.post('/create-checkout-session', CheckoutController);

router.get('/session/:id', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.params.id);
    const lineItems = await stripe.checkout.sessions.listLineItems(req.params.id);

    const orderData = {
      userId: session.metadata.userId,
      transactionId: session.payment_intent,
      customerEmail: session.customer_details.email,
      estimatedDelivery: '3–5 business days',
      totalAmount: session.amount_total / 100,
      items: lineItems.data.map(item => ({
        name: item.description,
        quantity: item.quantity,
        price: item.amount_subtotal / 100,
      })),
    };

    const savedOrder = await Order.create(orderData);

    // ✅ Clear cart from database
    await Cart.findOneAndDelete({ userId: session.metadata.userId });

    res.json(savedOrder);
  } catch (err) {
    console.error('Stripe session fetch error:', err);
    res.status(500).json({ error: 'Failed to retrieve session or save order' });
  }
});


router.get('/orders/:userId', async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
});

module.exports = router;