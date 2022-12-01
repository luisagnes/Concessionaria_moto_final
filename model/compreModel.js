const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const compreSchema = new Schema({
    modelo:{
        type: String,
        required: [true, 'Informar modelo da moto'],
        trim: true,
    },
    retirada: {
        type: String,
        required: [true, 'Informar a data da retirada'],
        trim: true,
        
    },
    valor: {
        type: String,
        required: [true, 'Informar valor total da compra'],
        trim: true,
        

    },

    situacao: {
        type: String,
        required: [true, 'Informar se o pagamento foi realizado ou não'],
        trim: true,
        
    }
})

module.exports = mongoose.model("Compra", compreSchema);