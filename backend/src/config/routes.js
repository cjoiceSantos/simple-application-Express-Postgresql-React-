const express = require('express')
const router = express.Router()

const departamentoController = require('../api/controllers/departamentoController')
const dependenteController = require("../api/controllers/dependenteController")

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


module.exports = router