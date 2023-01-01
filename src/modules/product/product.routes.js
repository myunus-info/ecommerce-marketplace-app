const productController = require('./product.controller');

module.exports = app => {
  app.post('/api/seller/create-catalog', productController.createProduct);
};
