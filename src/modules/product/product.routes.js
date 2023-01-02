const path = require('path');
const productController = require('./product.controller');
const Permissions = require(path.join(
  process.cwd(),
  'src/modules/core/authorization/authorization.constants'
));
const authorizePermissions = require(path.join(
  process.cwd(),
  'src/modules/core/authorization/authorization.middleware'
));
const AuthStrategy = require(path.join(
  process.cwd(),
  'src/modules/user/user.authentication.middleware'
));

module.exports = app => {
  app.post(
    '/api/seller/create-product',
    AuthStrategy,
    authorizePermissions(Permissions.SELLER_PERMISSION),
    productController.createProduct
  );
};
