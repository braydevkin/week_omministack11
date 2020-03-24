//Projeto em Node.js
//importando o modulo express pra dentro da variavel
const express = require('express');
const cors = require('cors')
const routes = require('./routes')

//variavel que armazena a aplicação.
const app = express();

//Antes das requisições, converter no body em JSON
app.use(cors())
app.use(express.json())
app.use(routes)


//porta de acesso no local host
app.listen(3333)