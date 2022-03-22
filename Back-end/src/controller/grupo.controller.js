

const grupoModelo = require('../models/grupo');


const controller = {}


controller.post = async (req, res) => {
    const grupo = await grupoModelo.create(req.body);
    res.json(grupo);
    /*
    const perfil = await perfilModelo.create(req.body);
    res.json(perfil);
    */
}


controller.findAll = async (req, res) => {
    const grupo = await grupoModelo.find();
    res.json(grupo);
}

controller.put = async (req, res) => {
    const id = req.params.id;
    await grupoModelo.findOneAndUpdate(id, req.body);


    const grupoAct = await grupoModelo.findById(id);
    res.json(grupoAct);
}

controller.delete = async (req, res) => {
    const id = req.params.id;
    await grupoModelo.findByIdAndDelete(id);
    res.status(200)
    res.json("grupo eliminado");
}

module.exports = controller;
