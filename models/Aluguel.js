const mongoose = require('mongoose');

const aluguelSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    date_initial : {type: Date, required: true},
    date_final : {type: Date, required: true},
    status : {type: String, required: true, default: 'Alugado'},
    value: {type: Number, required: true},
    clientId: {type: mongoose.Schema.Types.ObjectId, ref: 'clients'}
})

const Aluguel = mongoose.model('alugueis', aluguelSchema)

module.exports = Aluguel