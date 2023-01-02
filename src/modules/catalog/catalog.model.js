const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  products: [
    {
      name: {
        type: String,
        required: true,
      },
    },
    {
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  seller: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Catalog', catalogSchema);
