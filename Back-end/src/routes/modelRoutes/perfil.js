const router = require('express').Router();


//const { post } = require('../../controller/perfil.controller');
const controller = require('../../controller/perfil.controller');


router.post('/', controller.post);

router.get('/', controller.findAll);

router.put('/:id', controller.put);

router.get('/find/:id', controller.findById);

router.delete('/:id', controller.delete);


module.exports = router;