const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT
const sequelize = require('./connection/sqliteConnection')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

sequelize.sync().then(()=>{
    console.log('Connection with Sqlite is established')
}).catch(err =>{
    console.log('Error connecting with Sqlite: ' + err)
})

app.listen(port, ()=>{
    console.log(`Listening the port : ${port}`)
})