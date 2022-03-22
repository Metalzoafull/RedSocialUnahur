const router = require('express').Router();


const controller = require('../../controller/grupo.controller');



router.post('/', controller.post);

router.get('/', controller.findAll);

//router.get('/:id', controller);

router.put('/:id', controller.put);

router.delete('/:id', controller.delete);


module.exports = router;