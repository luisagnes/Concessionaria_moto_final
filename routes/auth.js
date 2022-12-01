const express = require('express');
const controller = require('../controllers/usersController')
const router = express.Router();
const autenticacao = require('../middlewares/authMiddleware')

router.post('/registro', controller.registrar);

router.post('/login', controller.login);

module.exports = router;