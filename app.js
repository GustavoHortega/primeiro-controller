const express = require('express');
const path = require('path');

const routerPincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');

const app = express();
const porta = 3000;

// Ejs config
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// routers
app.use('/', routerPincipal);
app.use('/pedidos', routerPedidos);


app.listen(porta, () =>{
    console.log(`servidor ouvindo na porta ${porta}`);
});