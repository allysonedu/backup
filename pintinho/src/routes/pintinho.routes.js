const {Router} = require('express')
const controller = require('../controller/controller')

const pintinhoRouter = Router()


pintinhoRouter.post('/pintinho',controller.create)

pintinhoRouter.get('/pintinho',controller.getitens)

module.exports = pintinhoRouter 