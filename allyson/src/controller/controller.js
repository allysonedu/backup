const array = []
module.exports = {
    async create ( request, response ) {
        const  { codigo, alimento,quantidade,preco} = request.body
        
        const total = quantidade*preco 

        const iten = {
            codigo,
            alimento,
            quantidade,
            preco,
            calcula : total 
        }
        array.push(iten)
        return response.json(iten)
        
    },
    async getItens(request, response) {
        return response.json(array)
    }
}






