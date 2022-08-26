const express = require ('express')

const arteataqueRouter = require('./routes/arteataque.Router')

const app = express ()

app.use(express.json())

app.listen(3333, () => console.log('ok: rodando carai'))