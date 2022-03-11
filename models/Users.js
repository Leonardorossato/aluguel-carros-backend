const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Users extends Model {}

Users.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 'false'
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true
})

module.exports = Users