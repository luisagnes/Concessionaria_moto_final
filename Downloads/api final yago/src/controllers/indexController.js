const createError = require("http-errors");

function indexRouter(req, res, next) {
    res.json("API DE LOJA DE MOTO");
  }

  module.exports = {indexRouter}