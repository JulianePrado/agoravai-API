const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Doador = require('../models/Doador');


const connection = new Sequelize(dbConfig);

Doador.init(connection);

module.exports = connection;