const { Schema } = require('mongoose');

const Pedido = new Schema({

    cliente:{
        nome:{
            type: String,
            required: true
        },
        sobrenome:{
            type: String,
            required: true
        }
    },
    pizzas:[
        {
            sabor:{
                type: String,
                required: true
            },
            quantidade:{
                type: Number,
                required: true
            },
            tamanho:{
                type:String,
                required: true,
                enum:['pequeno','médio','grande']
            }
        }
    ],
    metodoDePagamento:{
        type:String,
        required: true,
        enum:['PIX','cartão de crédito']
    },
    total:{
        type:Number,
        required: true
    },
    pago:{
        type:Boolean,
        required: true
    }
})

module.exports = Pedido;