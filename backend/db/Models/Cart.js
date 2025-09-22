const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  image: String,
  color: String,
  size: String,
  quantity: Number,
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: [cartItemSchema],
});

module.exports = mongoose.model('Cart', cartSchema);