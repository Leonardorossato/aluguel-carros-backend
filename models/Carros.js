const mongoose = require('mongoose');

const carrosSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    description : {type: String, required: true},
    year : {type: Date, required: true},
    model: {type: String, required: true},
    especification: {type: String, required: true},
    combust: {type: String, required: true},
    color: {type: String, required: true},
    marcasId: {type: mongoose.Types.ObjectId, ref: 'marcas'}
})

const Carros = mongoose.model('carros', carrosSchema)

module.exports = Carros