const array4 =[]

module.exports = {
    async create (request, response) {
        const temperatura = {celsius} = request.body
        calcula = celsius * 1.8 + 32

        const iten = {
            celsius,
            calcula,
        }
        array4.push(iten)
        return response.json(iten)

    },
    async getItens (request, response){
        return response.json(array4)
    }
    
}




