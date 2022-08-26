const {Router} = require('express')

const controller = require('../controller/controller')

const allysonRouter = Router ( )

allysonRouter.post('/allyson', controller.create)

allysonRouter.get('/allyson', controller.getItens)

module.exports = allysonRouter



