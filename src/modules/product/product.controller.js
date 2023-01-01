const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));

const createProduct = asyncHandler(async (req, res, next) => {
  res.send('Create product route');
});

module.exports = {
  createProduct,
};
