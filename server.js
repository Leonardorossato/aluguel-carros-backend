const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT
const clientRouter = require('./routes/clientRouter')
const carRouter = require('./routes/carRouter')
const sequelize = require('./connection/sequelize')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.use('/api/clients', clientRouter)
app.use('/api/carros', carRouter)

app.listen(port, ()=>{
    console.log(`Listening the port : ${port}`)
})