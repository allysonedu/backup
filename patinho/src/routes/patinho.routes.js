const {Router} = require ('express')

const controller = require('../controller/controller')

const patinhoRouter = Router()

patinhoRouter.post('/patinho', controller.create)

patinhoRouter.get('/patinho', controller.getItens)

module.exports = patinhoRouter