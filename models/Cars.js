const sequelize = require('../connection/sqliteConnection')
const {Model, DataTypes} = require('sequelize')

class Cars extends Model {}

Cars.init({
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    placa:{
        type: DataTypes.NUMBER,
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: 'false'
    },
    fuel:{
        type: DataTypes.STRING,
        allowNull: false
    },
    color:{
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    tableName: 'cars',
    timestamps: true
}, Cars.associate = (models)=>{
    Cars.hasMany(models.Brands, {
        foreignKey: 'brandsId'
    })
})

module.exports = Cars