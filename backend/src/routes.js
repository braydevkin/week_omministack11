const express = require('express');

//Importação das rotas da pasta 'controllers'
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SectionController = require('./controllers/SectionController')
//--------------------------------------------------------------------------------------------------

/*Conexão com o banco de dados*/
const connection = require('./database/connection')

//Exportação das rotas para o arquivo 'index.js'
const routes = express.Router()

//--------------------------------------------------------------------------------------------------

/* --> Cadastro e exibição dos dados das Ongs.
Exibi os dados dos usuarios cadastrados no banco.
A rota etá abstraida dentro do arquivo 'OngConstroller.js'
*/
routes.get('/ongs', OngController.index)


/*
Armazenar os dados de cadastro no DB
A rota está abstraida dentro do arquivo 'OngController.js'
*/
routes.post('/ongs', OngController.create)

//---------------------------------------------------------------------------------------------------

/*--> Cadastro e exibição dos incidents das ongs.
Exibi os dados dos incidents
A rota etá abstraida dentro do arquivo 'IncidentController.js'
*/
routes.get('/incidents', IncidentController.index)

/*
Armazena os incidents no banco
A rota está abstraida dentro do arquivo 'IncidentController.js'
*/
routes.post('/incidents', IncidentController.create)

//(DELETA OS INCIDENTS DO BANCO)
/*Está rota dele um incident com base na ID*/
routes.delete('/incidents/:id', IncidentController.delete)


//----------------------------------------------------------------------------------------------------
/*
Lista casos especificos de uma ONG
A rota está abstraida entro do arquivo 'ProfileControler.js'
*/
routes.get('/profile', ProfileController.index)

//---------------------------------------------------------------------------------------------------
routes.post('/sessions',SectionController.create)
//exportando a variavel para o arquivo index
module.exports = routes;