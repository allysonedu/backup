const {Router} = require('express')

const controller = require('../controller/controller')

const eduardoRouter = Router ( )

eduardoRouter.post('/eduardo', controller. create)

eduardoRouter.get('/eduardo', controller. getItens)

module.exports = eduardoRouter



