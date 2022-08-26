const express = require('express')

const revRouter = require ('./Router/rev.routes')

 const app = express ( )

app.use (express.json( ))

app.use(revRouter)

app.listen(3333, ( ) => console.log ('rodando'))