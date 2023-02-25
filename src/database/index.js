const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Donatario = require('../models/Donatario');
const Movel = require('../models/Movel');
const Produto = require('../models/Produto');
const Roupa = require('../models/Roupa');


const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Donatario.init(connection);
Movel.init(connection);
Produto.init(connection);
Roupa.init(connection);

module.exports = connection;