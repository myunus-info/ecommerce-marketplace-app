const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderStatus: {
    type: String,
    enum: ['pending', 'confirmed'],
    default: 'pending',
  },
  dediveryStatus: {
    type: String,
    enum: ['pending', 'processing', 'success', 'failed'],
    default: 'pending',
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('Order', orderSchema);
