const express = require('express');
const router = express.Router();
const Grupo = require('../models/grupo');
const bodyParser=require('body-parser');

router.use(bodyParser.urlencoded({extend:true}))
router.use(bodyParser.json())

router.post('/grupo/add', async (req, res, next) => {
    const grupos = new Grupo(req.body);
    await grupos.save();
    console.log(grupos)
    res.status(200)
    res.send(grupos)
  });
  
  router.get('/grupo/join', async (req, res, next) => {
    const grupo = await Grupo.find();
    res.status(200)
    res.send(grupo)    
  });

  router.post('/grupo/create', async (req, res, next) => {
    const grupo = await Grupo.find();
    res.status(200)
    res.send(grupo)
  });
  // grupo/accion
  router.get('/grupo', async (req, res, next) => {
    const grupos = await Grupo.find();
    res.status(200)
    res.json(grupos)
  });
  
  router.delete('/grupo/delete/:id', async (req, res, next) => {
    let { id } = req.params;
    await Grupo.deleteOne({_id: id});
    res.status(200)
  });// falla pero borra 
  
  router.put('/grupo/update/:id', async (req, res, next) => {
    const { id } = req.params;
    await Grupo.update({_id: id}, req.body);
    res.status(200)
    res.json(Grupo)
  });  
  


  module.exports = router;