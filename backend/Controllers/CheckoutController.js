const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const CheckoutController = async (req, res) => {
  const { cartItems, userId,finalAmount } = req.body;

  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'inr',
      product_data: {
        name: item.name,
        description:item.description,
        metadata: {
          category: item.category, // ✅ moved here
        },
      },
      unit_amount: Math.round(finalAmount * 100),
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/cart`,
      metadata: { userId },
    });

    res.json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: 'Payment session creation failed' });
  }
};

module.exports = { CheckoutController };