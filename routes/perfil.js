const express = require('express');

const router = express.Router();

router.get('/',(_,res)=>{
    res.render('perfil/index',{
        nomeCompleto: "Gustavo Dellamare Hortega da Silva",
        idade: "22",
    })
});

module.exports = router;