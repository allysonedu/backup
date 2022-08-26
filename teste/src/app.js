const express = require('express')

const testeRouter = require('./Router/teste.routes')

const server = express( )          

server.use (express.json( ))

server.use( testeRouter )

server.listen(3333, () => console.log('rodando'))





