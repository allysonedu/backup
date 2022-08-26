
const express = require ('express')

const patinhoRouter = require('./routes/patinho.routes')

const app = express ()

app.use(express.json())

app.use(patinhoRouter)

app.listen(3333,() => console.log('ok: ta rodando e fds'))

