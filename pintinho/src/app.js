
const express = require ('express')

const pintinhoRouter = require('./routes/pintinho.routes')

const app = express( )

app.use (express.json( ))

app.use(pintinhoRouter)

app.listen(3333,() => console.log('ok: rodando fds'))