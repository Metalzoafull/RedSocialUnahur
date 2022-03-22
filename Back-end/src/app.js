const express = require('express');
const app = express();
const configApp = require('./configurations/config');
const middlewareApp = require('./middlewares/middlewares');
const updatabase = require('./database/database');

const apiRouter = require('../src/routes/apiRoutes')
// const usePassPort = require('./passport/local-auth')

configApp(app)
updatabase()
middlewareApp(app, express, apiRouter);
// usePassPort()


app.use('/', require('./routes/index'));
app.use('/', require('./routes/perfil'));
app.use('/', require('./routes/grupo'));