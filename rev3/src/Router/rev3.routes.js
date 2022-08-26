const {Router} = require('express')

const controller = require('../controller/controller')

const rev3Router = Router ( )

rev3Router.post('/rev3', controller.create)

rev3Router.get('/rev3', controller.getItens)

module.exports = rev3Router




