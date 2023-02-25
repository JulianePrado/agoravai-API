const express = require ('express');
const UsuarioController = require('./controllers/UsuarioController');
const DonatarioController = require('./controllers/DonatarioController');
const MovelController = require('./controllers/MovelController');
const ProdutoController = require('./controllers/ProdutoController');
const RoupaController = require('./controllers/RoupaController');


const routes = express.Router();

//rotas de usuarios ↓

routes.get('/usuarios', UsuarioController.index);
routes.get('/usuarios/:id', UsuarioController.show);
routes.post('/usuarios', UsuarioController.store);
routes.put('/usuarios/:id', UsuarioController.update);
routes.delete('/usuarios/:id', UsuarioController.delete);

//rotas dos Donatarios ↓

routes.get('/donatarios', DonatarioController.index);
routes.get('/donatarios/:id', DonatarioController.show);
routes.post('/donatarios', DonatarioController.store);
routes.put('/donatarios/:id', DonatarioController.update);
routes.delete('/donatarios/:id', DonatarioController.delete);

//rotas dos produtos ↓

routes.get('/produtos', ProdutoController.index);
routes.get('/produtos/:id', ProdutoController.show);
routes.post('/produtos', ProdutoController.store);
routes.put('/produtos/:id', ProdutoController.update);
routes.delete('/produtos/:id', ProdutoController.delete);

//rotas de movel ↓

routes.get('/movel', MovelController.index);
routes.get('/movel/:id', MovelController.show);
routes.post('/movel', MovelController.store);
routes.put('/movel/:id', MovelController.update);
routes.delete('/movel/:id', MovelController.delete);

//rotas de roupas ↓

routes.get('/roupas', RoupaController.index);
routes.get('/roupas/:id', RoupaController.show);
routes.post('/roupas', RoupaController.store);
routes.put('/roupas/:id', RoupaController.update);
routes.delete('/roupas/:id', RoupaController.delete);

module.exports = routes;