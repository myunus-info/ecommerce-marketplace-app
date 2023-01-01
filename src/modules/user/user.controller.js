const path = require('path');
const { asyncHandler, AppError } = require(path.join(process.cwd(), 'src/modules/core/errors'));

const register = asyncHandler(async (req, res, next) => {
  res.send('Register route');
});

const login = asyncHandler(async (req, res, next) => {
  res.send('Register route');
});

module.exports = {
  register,
  login,
};
