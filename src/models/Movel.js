const { Model, DataTypes } = require('sequelize');

class Movel extends Model {
    static init(sequelize) {
        super.init({
            tipo: DataTypes.STRING,
            condicao: DataTypes.STRING
        }, {
            sequelize,
        })
    }
 

}




module.exports = Movel;