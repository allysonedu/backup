const {Router} = require('express')

const controller = require('../controller/rev.controller')

const revRouter = Router ( )

revRouter.post('/rev', controller.create)

revRouter.get('/rev', controller.getItens)


module.exports = revRouter