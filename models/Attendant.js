const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Attendant extends Model {}

Attendant.init({
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
    matricula:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ctps:{
        type: DataTypes.NUMBER,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
}, {
    sequelize,
    tableName: 'attendants',
    timestamps: true
},Attendant.associate = (models) =>{
    Attendant.hasMany(models.Users, {
        foreignKey: 'usersId',
    })
    Attendant.hasMany(models.Rents, {
        foreignKey: 'rentsId',
    })
})
module.exports = Attendant