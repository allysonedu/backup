const { Router } = require('express');

const controller = require('../controller/controller');

const rev4Router = Router();

rev4Router.post('/rev4', controller.create);

rev4Router.get('/rev4', controller.getItens);

module.exports = rev4Router;
