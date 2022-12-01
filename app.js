var express = require('express');
const mongoose = require('mongoose');
var path = require('path');
const config = require('./config/env.json')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var indexRouter = require('./routes/index');
var routerCompre = require('./routes/compreRouter');
var routerEstoque = require('./routes/estoqueRouter');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/concessionaria-moto', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
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