const express = require('express')

const eduardoRouter = require('./Router/eduardo.routes')

const app = express ( )

app.use(express.json( ))

app.use(eduardoRouter)

app.listen(3333, ( ) => console.log ('rodando'))

