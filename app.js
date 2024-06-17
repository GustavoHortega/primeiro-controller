const express = require('express');
const routerPincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');

const app = express();
const porta = 3000;

app.use('/', routerPincipal);
app.use('/pedidos', routerPedidos);


app.listen(porta, () =>{
    console.log(`servidor ouvindo na porta ${porta}`);
});