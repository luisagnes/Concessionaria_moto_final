const { ObjectId } = require('bson');
const Compra = require('../model/compreModel');

async function criarCompra(req, res) {
    const compre = new Compra (req.body);
    const erros = []
     await compre.save()
     .then(doc => {
        console.log(doc)
        return res.status(201).end();
    })
     .catch(error => {
       const msgErro = {};
        Object.values(error.errors).forEach(({properties}) =>{
            msgErro[properties.path] = properties.message;
        });
        return res.status(422).json(msgErro);
    });
}

async function listarCompra(req, res) {
    await Compra.find({})
    .then(compre => {return res.json(compre);})
    .catch(error => {return res.status(500).json({error}); });
}

async function listarCompraPorId(req, res) {
    await Compra.findOne({_id: ObjectId(req.params.id)})
    .then(compre => {
        if(compre) return res.json(compre);
        else return res.status(404).json('Compra nao localizada')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function atualizarCompra(req, res) {
    await Compra.findOneAndUpdate({_id: ObjectId(req.params.id)}, req.body,
    {runValidators: true})
    .then(compre => {
        if(compre) return res.status(204).end();
        else return res.status(404).json('Compra atualizada com sucesso!')
    })
    .catch(error => {return res.status(500).json({error}); });
}

async function removerCompra(req, res) {
    await Compra.findOneAndDelete({_id: ObjectId(req.params.id)})
    .then(compre => {
        if(compre) return res.status(204).end();
        else return res.status(404).json('Compra excluída com sucesso!')
    })
    .catch(error => {return res.status(500).json({error}); });
}

module.exports = { listarCompra, listarCompraPorId, criarCompra, atualizarCompra, removerCompra};