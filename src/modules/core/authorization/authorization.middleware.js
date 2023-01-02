const path = require('path');
const { AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));

const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(new AppError(403, 'You are unauthorized to perform this action'));
    }
    next();
  };
};

module.exports = authorizePermissions;
