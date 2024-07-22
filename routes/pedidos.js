const express = require('express');

const { Pedido } = require ('../models');

const router = express.Router();

router.get('/', (_,res) =>{
    Pedido.find({}).then((pedidos)=>{
        res.render('pedidos/index', {
            nomeDoUsuario: "Gustavo",
            pedidos: pedidos,
        })
    })
})

module.exports = router;