const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  transactionId: { type: String, required: true },
  customerEmail: { type: String },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
    }
  ],
  totalAmount: Number,
  estimatedDelivery: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);