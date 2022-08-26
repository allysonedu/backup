const express = require ('express')
 
const inicioRouter = require('./Router/inicio.routes')

const app = express ()
 
app.use ( express.json ( ))

app.use(inicioRouter)


app.listen(3333, ( ) => console.log('rodando'))



