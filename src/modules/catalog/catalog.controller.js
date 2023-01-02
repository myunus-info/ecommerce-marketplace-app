const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));
const Order = require(path.join(process.cwd(), 'src/modules/order/order.model'));
const Catalog = require('./catalog.model');

const createCatalog = asyncHandler(async (req, res, next) => {
  const { products } = req.body;
  const seller = req.user._id;
  const catalog = await Catalog.findOne({ seller });
  if (catalog) {
    catalog.products.push(...products);
    await catalog.save();
  } else {
    await Catalog.create({ products, seller });
  }
  res.status(201).json({
    status: 'success',
    message: 'Product catalog created successfully!',
  });
});

const getOrders = asyncHandler(async (req, res, next) => {
  const orders = await Order.find({ seller: req.user._id });
  if (orders.length < 1) {
    return next(new AppError('No orders found', 404));
  }
  res.status(200).json({
    status: 'success',
    orders,
  });
});

module.exports = {
  createCatalog,
  getOrders,
};
