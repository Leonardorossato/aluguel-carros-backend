const mongoose = require('mongoose');

const marcasSchema = new mongoose.Schema({
    _id: {type: mongoose.Types.ObjectId},
    name: {type: String, required: true},
    description: {type: String, required: true}
})

const Marcas = mongoose.model('marcas', marcasSchema)

module.exports = Marcas