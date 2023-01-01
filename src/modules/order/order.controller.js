const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));
const Order = require('./order.model');

const createOrder = asyncHandler(async (req, res, next) => {
  res.send('Create order route');
});

module.exports = {
  createOrder,
};
