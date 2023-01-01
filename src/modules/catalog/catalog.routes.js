const catalogController = require('./catalog.controller');

module.exports = app => {
  app.post('/api/catalogs', catalogController.createCatalog);
};
