const express = require('express')

const allysonRouter = require('./Router/allyson.routes')

const app = express ( )



app.use(express.json ( ))

app.use(allysonRouter)

app.listen(3333, ( ) => console.log('rodando'))
