const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Rents extends Model {}

Rents.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    date_initial: {
        type: DataTypes.DATE,
        allowNull: false
    },
    date_final: {
        type: DataTypes.DATE,
        allowNull: false
    },
    value: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    obs:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'rents',
    timestamps: true
})

module.exports = Rents