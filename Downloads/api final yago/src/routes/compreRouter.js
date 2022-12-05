const express = require('express');
const router = express.Router();
const autenticacao = require('../middleware/authMiddleware')
const compreController = require('../controllers/compreController');
const app = express();

router.get('/', autenticacao, compreController.listarCompra );

router.get('/:id', autenticacao, compreController.listarCompraPorId );

router.post('/', autenticacao, compreController.criarCompra);

router.put('/:id', autenticacao, compreController.atualizarCompra);

router.delete('/:id', autenticacao, compreController.removerCompra);

module.exports = router;