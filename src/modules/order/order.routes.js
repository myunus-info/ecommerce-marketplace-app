const orderController = require('./order.controller');

module.exports = app => {
  app.post('/api/buyer/seller-catalog/:seller_id', orderController.createOrder);
};
