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
    km_initial: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    km_final: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    value_Km: {
        type: DataTypes.NUMBER,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true
})

module.exports = Users