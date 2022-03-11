const express = require('express')
const router = express.Router()
const CarrosController = require('../controllers/carrosController')

//Clientes //
router.get('/', CarrosController.getAllCarros)
router.get('/carro/:id', CarrosController.getCarrosById)
router.post('/carro', CarrosController.createCar)
router.put('/carro/:id', CarrosController.updateCar)
router.delete('/carro/:id', CarrosController.deleteCar)

//Alugueis//
router.get('/carro/:carroId/marca/:marcaId', CarrosController.getAllMarcas)
router.post('/carro/:carroId/marca', CarrosController.createMarcas)

module.exports = router