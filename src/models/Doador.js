const { Model, DataTypes } = require('sequelize');

class Doador extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            cpf: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            sequelize,
        })
    }
 

}


module.exports = Doador;