
//const perfilModelo = require('../models')
const perfilModelo = require('../models/perfil')

const controller = {}


controller.post = async (req, res) => {
    const perfil = await perfilModelo.create(req.body);
    res.json(perfil);
    /*console.log('POST /perfil/add')
    const perfiles = new Perfil(req.body)
    await perfiles.save()
    .then(perfiles =>{
        console.log(perfiles)
        res.status(200)
        res.send(perfiles)})
    .catch(err=>{console.log(err)})*/
}


controller.findAll = async (req, res) => {
    //req.params.id
    const perfiles = await perfilModelo.find()
    res.json(perfiles);
    /*.then(perfiles =>{
        res.status(200)
        res.send(perfiles)})
    .catch(err=>{console.log(err)})*/
}

controller.findById = async (req, res) => {
    const id = req.params.id;
    const perfiles = await perfilModelo.findById(id);
    res.json(perfiles)
}

controller.put = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    await perfilModelo.findOneAndUpdate({_id: id} ,req.body);
    //await Perfil.update({_id: id}, req.body);
    //res.status(200)
    //res.send(perfiles)

    const perfilAct = await perfilModelo.findById(id);

    res.json(perfilAct);
}

controller.delete = async (req, res) => {
    const id = req.params.id;
    await perfilModelo.findByIdAndDelete(id);
    res.status(200);
    res.json("perfil eliminado");
    
}


module.exports = controller;
