const Sequelize = require('sequelize')
const sequelize = new Sequelize('aluguel-carros', 'aluguel-carros-db', 'pass',{
    dialect: 'sqlite',
    host: './dev.sqlite'
})

module.exports = sequelize