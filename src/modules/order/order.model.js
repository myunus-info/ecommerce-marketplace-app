const mongoose = require('mongoose');

const orederSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

mongoose.model('Order', orederSchema);
