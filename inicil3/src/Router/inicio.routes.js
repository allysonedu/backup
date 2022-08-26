const {Router} = require('express')

const controller = require('../controller/inicio.controller')

const inicioRouter = Router ()
 
inicioRouter.post('/inicio', controller.create)

inicioRouter.get('/inicio', controller.getItens)

module.exports = inicioRouter 






