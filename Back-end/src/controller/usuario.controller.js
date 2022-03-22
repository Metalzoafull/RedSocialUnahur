const usuarioModelo = require('../models/usuario');
//const router = require('../routes');


const controller = {}


controller.post = async (req, res) => {
    const usuario = await usuarioModelo.create(req.body);
    res.json(usuario);
}

controller.findAll = async (req, res) => {
    const usuarios = await usuarioModelo.find()
    res.json(usuarios);


}


controller.findEmail = async (req, res) => {
    const email = req.params.email
    const usuario = await usuarioModelo.findOne({email: email});
    res.json(usuario);
}


module.exports = controller;