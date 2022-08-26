
const {Router} = require('express')

const testecontroller = require('../controller/teste.controller')

const testeRouter = Router ()

testeRouter.post('/teste', testeRouter.createteste)



testeRouter.get('/teste', (request, response) => {
    return response.json ({ok: true })
})

module.exports = testeRouter







