const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
  color: String,
  size: String,
  quantity: Number,
  category: {
    type: String,
    enum: ['shirts', 't-shirts', 'jeans', 'shorts'],
    required: true,
  }
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);