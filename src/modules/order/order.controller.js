const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));
const { generateLoggedInUser } = require(path.join(process.cwd(), 'src/modules/user/user.service'));
const User = require(path.join(process.cwd(), 'src/modules/user/user.model'));
const Catalog = require(path.join(process.cwd(), 'src/modules/catalog/catalog.model'));
const Order = require('./order.model');

const createOrder = asyncHandler(async (req, res, next) => {
  const seller = req.params.seller_id;
  const buyer = req.user._id;
  await Order.create({ seller, buyer });
  res.status(201).json({
    status: 'success',
    message: 'Order created successfully',
  });
});

const getSellers = asyncHandler(async (req, res, next) => {
  const sellers = await User.find({ role: 'seller' });
  if (sellers.length < 1) {
    return next(new AppError(404, 'No sellers found'));
  }
  const customSellers = sellers.map(seller => generateLoggedInUser(seller));
  res.status(200).json({
    stauts: 'success',
    sellers: customSellers,
  });
});

const getSellersProductsCatalog = asyncHandler(async (req, res, next) => {
  const seller = req.params.seller_id;
  const productsCatalog = await Catalog.find({ seller });
  if (productsCatalog.length < 1) {
    return next(new AppError(404, 'No products catalog found'));
  }
  res.status(200).json({
    stauts: 'success',
    productsCatalog,
  });
});

module.exports = {
  createOrder,
  getSellers,
  getSellersProductsCatalog,
};
