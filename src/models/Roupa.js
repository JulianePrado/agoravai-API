const { Model, DataTypes } = require('sequelize');

class Roupa extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING,
            tamanho: DataTypes.STRING,
            condicao: DataTypes.STRING
        }, {
            sequelize,
        })
    }
 

}




module.exports = Roupa;