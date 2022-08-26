const { response } = require('express')
const { request } = require('express')
const express = require('express')

const server = express ()

server.use(express.json())

server.post('/teste3', (request, response) => {
    const {total,tenho,hors} = request.body
    const horas = tenho/hors 
     
    return response.json({horas})
  

})

server.listen(3333)



