const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

module.exports = mongoose.model('Catalog', catalogSchema);
