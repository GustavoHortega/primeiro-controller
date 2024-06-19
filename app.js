const express = require('express');
const path = require('path');

const routerPincipal = require('./routes/principal');
const routerPedidos = require('./routes/pedidos');
const routerPerfil = require('./routes/perfil');

const app = express();
const porta = 3000;

// ejs config
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// routers
app.use('/', routerPincipal);
app.use('/pedidos', routerPedidos);
app.use('/perfil', routerPerfil);

// css config
app.use('/styles', express.static('styles'));

app.listen(porta, () =>{
    console.log(`servidor ouvindo na porta ${porta}`);
});