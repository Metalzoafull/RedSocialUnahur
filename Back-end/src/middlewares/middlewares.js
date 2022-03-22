const middlewareApp = async (app,express, routes) => {
  const morgan = require('morgan')
  app.use(morgan('dev'))
  app.use(express.urlencoded({extended : true}));
  app.use(express.json());//revisar

  app.use('/api', routes);


};

module.exports = middlewareApp;
