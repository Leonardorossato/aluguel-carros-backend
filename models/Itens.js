const mongoose = require('mongoose');

const itensSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    kmInitial: {type: Number, required: true},
    kmFinal: {type: Number, required: true},
    value: {type:Number, required: true},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'clients'},
    carrosId: {type: mongoose.Schema.Types.ObjectId, ref: 'carros'},
    aluguelId: {type: mongoose.Schema.Types.ObjectId, ref: 'alugueis'},
    marcasId: {type: mongoose.Schema.Types.ObjectId, ref: 'marcas'},
})

const Itens = mongoose.model('itens', itensSchema)

module.exports = Itens