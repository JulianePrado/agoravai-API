const express = require ('express');
const DoadorController = require('./controllers/DoadorController');


const routes = express.Router();


//rotas dos doador ↓
routes.get('/doadores', DoadorController.index);
routes.get('/doadores/:id', DoadorController.show);
routes.post('/doadores', DoadorController.store);
routes.put('/doadores/:id', DoadorController.update);
routes.delete('/doadores/:id', DoadorController.delete);


//rotas dos donatario ↓


//rotas dos moveis ↓


//rotas dos produtos ↓


//rotas dos roupas ↓


module.exports = routes;