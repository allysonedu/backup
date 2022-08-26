const array1 = []

module.exports = {

    async create(request, response){

        const{nome,vida,dano,tipo} = request.body

    
        calcula:vida-dano

        let resultado

        if(vida > dano){
            
            resultado:'vivo e lindao'
        }else{ 
            resultado = 'se fideu'

        }
        const iten ={
            nome,
            vida,
            dano,
            tipo,
            calculo:resultado

        }
        array1.push(iten)
return response.json(iten)
    },
    async getitens(request, response){
        return response.json(array1)
    }
}
