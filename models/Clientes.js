const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId, required: true},
    name : {type : String, required: true, min: 3, max: 100},
    email : {type : String, required: true, min: 3, max: 100},
    password : {type : String, required: true, min:2, max: 100},
    cpf: { type : String, required: true, min: 3, max: 100, unique: true},
    city: {type : String, required: true, min:3, max: 100},
    bairro : {type : String, required: true, min:3, max: 100}
})

const Clientes = mongoose.model('clients', clientSchema)

module.exports = Clientes