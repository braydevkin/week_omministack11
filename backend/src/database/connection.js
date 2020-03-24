const knex = require('knex')
const configuration = require('../../knexfile')

//conectando com banco de dados develop
const connection = knex(configuration.development)

module.exports = connection