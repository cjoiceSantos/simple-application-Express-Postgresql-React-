const express = require('express')
const router = express.Router()

const departamentoController = require('../api/controllers/departamentoController')

//Rotas Departamento
router.post('/departamento', departamentoController.post)
router.put('/departamento/:id', departamentoController.put)
router.delete('/departamento/:id', departamentoController.delete)
router.get('/departamento/', departamentoController.get)

module.exports = router