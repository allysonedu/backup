const express = require('express')

const rev2Router = require('./Router/rev2.routes')

const app = express ( )

app.use(express.json( ))

app.use(rev2Router)

app.listen(3333 , ( ) => console.log('rodando 3333'))





