const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Brands extends Model {}

Brands.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'brands',
    timestamps: true
})

module.exports = Brands