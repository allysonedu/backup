const allyson =[]

module.exports ={
    async create (request, response) {
    const {nasci, ano, nome} = request.body 

    const idade = nasci  - ano 

    const iten = {
        nome,
        ano,
        nasci,
        cacula: idade
    }

    allyson.push(iten)
    
    return response.json(iten) 
    },
    async getItens(request, response) {
        return response.json(allyson)
    }
}



