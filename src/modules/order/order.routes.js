const path = require('path');
const orderController = require('./order.controller');
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
  app.get(
    '/api/buyer/list-of-sellers',
    AuthStrategy,
    authorizePermissions(Permissions.BUYER_PERMISSION),
    orderController.getSellers
  );
  app.get(
    '/api/buyer/seller-catalog/:seller_id',
    AuthStrategy,
    authorizePermissions(Permissions.BUYER_PERMISSION),
    orderController.getSellersProductsCatalog
  );

  app.post(
    '/api/buyer/create-order/:seller_id',
    AuthStrategy,
    authorizePermissions(Permissions.BUYER_PERMISSION),
    orderController.createOrder
  );
};
