const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(morgan('combined'))

mongoose.connect('mongodb://alan:alan123@ds111192.mlab.com:11192/madhacks')
mongoose.connection.on('open', () => {
  console.log('Connected to database')
})

mongoose.Promise = global.Promise

app.use(bodyparser.json())
app.use('/api', require('./routes/api'))

app.listen(process.env.port || 4000, () => {
  console.log('Server is up in port 4000.......!')
})