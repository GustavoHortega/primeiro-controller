const express = require('express');

const app = express();
const porta = 3000;

app.listen(porta, () =>{
    console.log(`servidor ouvindo na porta ${porta}`);
});