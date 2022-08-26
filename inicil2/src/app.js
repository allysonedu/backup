const { response } = require('express');
const { request } = require('express');
const express = require('express');

const server = express()

server.use(express.json())

server.post('/inicil2', (request, response) => {
    const {nota1, nota2,nota3, trabalho} = request.body

  const media = (nota1 + nota2 + nota3 + trabalho) / 3

  let resultado
  if (media > 8){
      resultado = 'se deu bem '
  }else{
      resultado = 'se deu mal'
  }
   return response.json({resultado})
})
 server.listen(3333)



