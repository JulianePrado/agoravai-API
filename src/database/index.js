const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doador = require('../models/Doador');
const Donatario = require('../models/Donatario');
const Movel = require('../models/Movel');
const Produto = require('../models/Produto');
const Roupa = require('../models/Roupa');


const connection = new Sequelize(dbConfig);

Doador.init(connection);
Donatario.init(connection);
Movel.init(connection);
Produto.init(connection);
Roupa.init(connection);

module.exports = connection;