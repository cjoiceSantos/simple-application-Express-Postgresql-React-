const express = require('express')
const router = express.Router()

const departamentoController = require('../api/controllers/departamentoController')
const dependenteController = require("../api/controllers/dependenteController")
const empregadoController = require("../api/controllers/empregadoController")

//Rotas Departamento
router.post('/departamento', departamentoController.post)
router.put('/departamento/:id', departamentoController.put)
router.delete('/departamento/:id', departamentoController.delete)
router.get('/departamento/', departamentoController.get)

//Rotas Dependente
router.post('/dependente', dependenteController.post)
router.put('/dependente/:id', dependenteController.put)
router.delete('/dependente/:id/:nome/', dependenteController.delete)
router.get('/dependente/', dependenteController.get)

//Rotas Empregado
router.post('/empregado', empregadoController.post)
router.put('/empregado/:id', empregadoController.put)
router.delete('/empregado/:id', empregadoController.delete)
router.get('/empregado/', empregadoController.get)

module.exports = router