const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },

  seller: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

module.exports = mongoose.model('Product', productSchema);
