const connection = require('../database/connection')
const crypto = require('crypto')

/*
OngController
-> Contém todos os métodos para criação e exibição de dados de uma ong cadastrada.
*/
module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*')
    
        return response.json(ongs)
    
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        //GERA UM ID ALEATORIO PARA A ONG
        const id = crypto.randomBytes(4).toString('HEX')

        //INSERI OS DADOS NA TABELA
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,

        })
        //DEPOIS DE CADASTRADO OS DADOS, RETORNA UM ID PARA O CLIENTE ACESSAR A PLATAFORMA
        return response.json({ id })
    }
}