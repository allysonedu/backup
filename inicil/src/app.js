const express = require ('express')
 
 const server = express( )

 server.use(express.json( ))

 server.post('/inicil', (request, response ) => {
    
    const {vida,dano} = request.body 

    let resultado
    if (vida > dano){
        resultado = 'vivo'
    }else{
        resultado = 'morto'
    }
      return response.json({resultado})
 })
server.listen(3333)









