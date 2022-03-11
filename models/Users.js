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
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'users',
    timestamps: true
}, Users.associate = (models)=>{
    Users.hasMany(models.Rents, {
        foreignKey: 'rentId'
    })
})

module.exports = Users