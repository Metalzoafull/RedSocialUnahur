const router = require('express').Router();

const controller = require('../../controller/usuario.controller');


router.post('/', controller.post);

router.get('/', controller.findAll);

router.get('/:email', controller.findEmail);

module.exports = router;