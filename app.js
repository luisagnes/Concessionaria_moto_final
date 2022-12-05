var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const config = require('./src/config/env.json')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');

var indexRouter = require('./src/routes/index');
var routerCompre = require('./src/routes/compreRouter');
var routerEstoque = require('./src/routes/estoqueRouter');
var routerlogar = require('./src/routes/auth');

const app = express();

app.use(express.json());
app.use('/concessionaria-moto', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/auth', routerlogar);
app.use('/compra', routerCompre);
app.use('/estoque', routerEstoque);

mongoose.connect(config.url)
    .then(app.listen(config.porta,() =>{
        console.log('API esta online, meu bom')
    }))
    .catch(error =>{
        console.log('Confere aí man, acho que deu ruim', error.message);
    });


module.exports = app;