const router = require('express').Router();


const apiPerfilRoutes = require('./modelRoutes/perfil');
const apiGrupoRoutes = require('./modelRoutes/grupo');
const apiUsuarioRoutes = require('./modelRoutes/usuario');



router.use('/perfilado', apiPerfilRoutes);
router.use('/grupito', apiGrupoRoutes);
router.use('/usuarios', apiUsuarioRoutes);

module.exports = router; 