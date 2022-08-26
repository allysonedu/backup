const express = require('express')

const rev3Router = require('./Router/rev3.routes')

const app = express( )

app.use(express.json( ))

app.use (rev3Router)

app.listen(3333, ( ) => console.log('rodando'))


