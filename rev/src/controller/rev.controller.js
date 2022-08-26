const array = []

module.exports = {
    async create (request, response) {
        const {base,altura} = request.body

        const area = base * altura / 2 

        const iten = {
            base,
            altura,
            calcula: area 
        
        }
        array.push(iten) 
        return response.json(iten)        
    },
    async getItens ( request, response){
        return response.json(array)
    }
}



