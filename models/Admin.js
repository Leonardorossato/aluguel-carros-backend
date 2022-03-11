const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Admin extends Model {}

Admin.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    tableName: 'admin',
    timestamps: true
})
module.exports = Admin