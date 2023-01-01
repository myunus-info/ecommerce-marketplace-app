const userController = require('./user.controller');

module.exports = app => {
  app.post('/api/auth/register', userController.register);
  app.post('/api/auth/login', userController.login);
};
