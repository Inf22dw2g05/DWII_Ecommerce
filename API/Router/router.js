const express = require('express');
const  router = express.Router();
const swaggerSpec = require('../controllers/swaggerConfig');
const usuario = require('../controllers/usersController.js');
const produto = require('../controllers/produtosController.js');
const pedido = require('../controllers/pedidosController.js');
const categoria = require('../controllers/categoriasController.js')

router.get("/usuario", usuario.getAllUser)
router.post("/usuario", usuario.createUser)
router.get("/usuario/:id", usuario.getUserById) 
router.delete("/usuario/:id", usuario.deleteUser)
router.get("/usuario/:id", usuario.updateUser)

router.get("/produto", produto.getAllProduto)
router.post("/produto", produto.createProduto)
router.delete("/produto", produto.deleteProduto)
router.put("/produto", produto.updateProduto)
 
router.get("/pedido", pedido.getAllPedido)
router.post("/pedido", pedido.createPedido)
router.delete("/pedido", pedido.deletePedido)
router.put("/pedido", pedido.updatePedido)

router.get("/categoria", categoria.getAllCategoria)
router.post("/categoria", categoria.createCategoria)
router.delete("/categoria", categoria.deleteCategoria)
router.put("/categoria", categoria.updateCategoria)

module.exports = router