module.exports = {
    async createteste(request, response) {
        const {totalemkg} = request.body 

        const valorMulta = 3.5 
     
        const limite = 3 

        const exedente = totalemkg - limite 

        let resultado = 0 

        if (exedente > 0) {
            resultado = exedente * valorMulta 
        }else{
            resultado = totalemkg
        
        }
        return Response.JSON(resultado)
    },
}