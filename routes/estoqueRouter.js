const e = require('express');
const express = require('express');
const autenticacao = require('../middlewares/authMiddleware')
const router = express.Router();
const estoqueController = require('../controllers/estoqueController');

const app = express();

router.get('/', autenticacao, estoqueController.listarEstoque );

router.get('/:id', autenticacao, estoqueController.listarEstoquesPorId);

router.post('/', autenticacao, estoqueController.criarEstoque);

router.put('/:id', autenticacao, estoqueController.atualizarEstoques);

router.delete('/:id', autenticacao, estoqueController.removerEstoques);

module.exports = router;
