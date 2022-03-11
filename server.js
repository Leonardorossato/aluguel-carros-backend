const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routes/userRouter')
const carsRouter = require('./routes/carsRouter')
const sequelize = require('./connection/sequelize')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

sequelize.sync().then(()=>{
    console.log('Connection with Sqlite is established')
}).catc(err =>{
    console.log('Error connecting with Sqlite: ' + err)
})

app.use('/api/users', userRouter)
app.use('/api/cars', carsRouter)

app.listen(port, ()=>{
    console.log(`Listening the port : ${port}`)
})