const path = require('path');
const catalogController = require('./catalog.controller');
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
    '/api/seller/create-catalog',
    AuthStrategy,
    authorizePermissions(Permissions.SELLER_PERMISSION),
    catalogController.createCatalog
  );

  app.get(
    '/api/seller/orders',
    AuthStrategy,
    authorizePermissions(Permissions.SELLER_PERMISSION),
    catalogController.getOrders
  );
};
