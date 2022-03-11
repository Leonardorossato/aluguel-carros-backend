const express = require('express')
const router = express.Router()
const ClientesController = require('../controllers/clientController')

//Clientes //
router.get('/', ClientesController.getAllClientes)
router.get('/client/:id', ClientesController.getClientesById)
router.post('/client', ClientesController.createClientes)
router.put('/client/:id', ClientesController.updateClient)
router.delete('/client/:id', ClientesController.deleteClient)

//Alugueis//
router.get('/aluguel', ClientesController.getAllAluguels)
router.post('/client/:clientId/aluguel', ClientesController.createAluguel)
router.put('/client/:clientId/aluguel/:aluguelId', ClientesController.updateAluguel)
router.delete('/client/:clientId/aluguel/:aluguelId', ClientesController.deleteAluguel)

module.exports = router