const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            tipo: DataTypes.STRING    
        }, {
            sequelize,
        })
    }
 

}




module.exports = Produto;