const express = require('express');

const { Perfil } = require('../models');

const router = express.Router();

router.get('/', (req,res) =>{
    Perfil.find({}).then((perfis) => {
        res.render('perfil/index', {
            perfil: perfis,
        });
    })
    .catch((err) => {
        console.error('Erro ao buscar perfis:', err);
        res.status(500).send('Erro interno do servidor');
    });
});

module.exports = router;