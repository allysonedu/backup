 const array = [] 
module.exports ={
    async create (request, response) {
        const { nome, nasceu, ano } = request.body

        const idade = nasceu - ano 

        const iten = {
            nome,
            nasceu,
            ano,
            culcula: idade 
        }
        array.push(iten)
        return response.json(iten)
    },
    async getItens (request, response) {
        return response.json( array  )
    }
}











