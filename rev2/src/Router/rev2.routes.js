   const {Router} = require('express')

   const controller = require('../controller/controller')


   const rev2Router = Router ( )

   rev2Router.post('/rev2', controller.create)

   rev2Router.get('/rev2', controller.getItens)
   
   module.exports = rev2Router


