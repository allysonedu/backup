const { format } = require("express/lib/response");

module.exports = {

    async creat (request, response){

        const{nome,vida,dano,tipo,} = request.body

        calculo;vida - dano 

        let resultado
        
        if(vida>dano){
            resultado:'vivo e lindao'
        }else{
            resultado ='faleceu'
        }
const iten = {
    nome,
    vida,
    dano,
    tipo,
    calculo:resultado
}
format.push(item)
return response.json(item)
    }
}