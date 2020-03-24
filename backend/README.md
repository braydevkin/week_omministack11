//RESOLVE ERRO DO SERVIDOR
/*taskkill /f /im node.exe*/

Anotações da aula 02 - Semana Omiministack 11.0

/*Rotas e Recursos*/

/*Métodos HTTP
-> GET: Busca informação do back-end.
-> POST: Criar uma informação no back-end.
-> PUT: Alterar uma informação no back-end.
-> DELETE: Deleta uma informação no back-end.
*/

/*
Tipos de parâmetros
-> Query params: Parametros nomeados enviados na rota após o '?' (filtros,paginação)
-> Route params: Parametros utilizados para identificar rescursos.
-> Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
*/ 

/*
Diferenaça entre banco de dados
-> SQL, SQL lite, MySQL, PostgreSQL, Oracle...

/*
Driver: SELECT * FROM user
-> Query Builder: table('users).select('*').where()

*/
//UTILIZANDO KNEW PARA SQLite3
Instalação passo a passo no site da Knex
*//


//Routes.js foi criado para armazenas minhas rotas http
ele exporta isso para o arquivo index.js que executa os dados executados no arquivo routes.js

//knexfile -> configura meu banco de dados