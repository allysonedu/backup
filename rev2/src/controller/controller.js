const array = []

module.exports  = {
    async create (request, response) {
        const {nome, dano, tipo, vida} = request.body 

        const fato = dano - vida 

        let resultado
        if (vida > dano){
            resultado :'vivo e perfeito'
        }else{
            resultado = 'foi pro ceu '

        }
        const iten = {
            nome,
            vida,
            dano,
            tipo,
            depoimento : resultado
        }
        array.push(iten)
        return response.json(iten)
    },
    async getItens (request, response) {
        return response.json(array)
    }
}





