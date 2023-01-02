const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));
const Product = require('./product.model');

const createProduct = asyncHandler(async (req, res, next) => {
  const { name, price } = req.body;
  await Product.create({ name, price, seller: req.user._id });
  res.status(201).json({
    status: 'success',
    message: 'Products created successfully!',
  });
});

module.exports = {
  createProduct,
};
