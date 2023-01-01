const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));
const Catalog = require('./catalog.model');

const createCatalog = asyncHandler(async (req, res, next) => {
  res.send('Create catalog route');
});

module.exports = {
  createCatalog,
};
