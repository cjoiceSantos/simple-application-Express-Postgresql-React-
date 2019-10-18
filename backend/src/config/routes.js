const express = require('express')
const router = express.Router()

const departamentoController = require('../api/controllers/departamentoController')
const dependenteController = require("../api/controllers/dependenteController")
const empregadoController = require("../api/controllers/empregadoController")
const localController = require("../api/controllers/localController")
const projetoController = require("../api/controllers/projetoController")
const trabalhaemController = require("../api/controllers/trabalhaemController")

//Routes table Departamento
router.post('/departamento', departamentoController.post)
router.put('/departamento/:id', departamentoController.put)
router.delete('/departamento/:id', departamentoController.delete)
router.get('/departamento/', departamentoController.get)

//Routes table Dependente
router.post('/dependente', dependenteController.post)
router.put('/dependente/:nome', dependenteController.put)
router.delete('/dependente/:nome/', dependenteController.delete)
router.get('/dependente/', dependenteController.get)

//Routes table Empregado
router.post('/empregado', empregadoController.post)
router.put('/empregado/:id', empregadoController.put)
router.delete('/empregado/:id', empregadoController.delete)
router.get('/empregado/', empregadoController.get)

//Routes table Local
router.post('/local', localController.post)
router.put('/local/:nome', localController.put)
router.delete('/local/:nome', localController.delete)
router.get('/local/', localController.get)

//Routes table Projeto
router.post('/projeto', projetoController.post)
router.put('/projeto/:id', projetoController.put)
router.delete('/projeto/:id', projetoController.delete)
router.get('/projeto/', projetoController.get)

//Routes table Projeto
router.post('/trabalhaem', trabalhaemController.post)
router.put('/trabalhaem/:empregado/:projeto', trabalhaemController.put)
router.delete('/trabalhaem/:empregado/:projeto', trabalhaemController.delete)
router.get('/trabalhaem/', trabalhaemController.get)

module.exports = router