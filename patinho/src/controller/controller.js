const array2 = []
module.exports = {

    async create (request,response){

        const {numero1, numero2, numero3} = request.body

        const resultado = numero1*numero2 / numero3

       const valor = {
        numero1,
        numero2,
        numero3,
        calcule : resultado


       }
       array2.push(valor)
       return response.json(valor)

       },
       async getItens (request, response) {
           return response.json(array2)
       }
           

      }      
    
      
