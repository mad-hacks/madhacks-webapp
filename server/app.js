const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(bodyparser.json())
app.use('/api', require('./routes/api'))


app.use(cors())
app.use(morgan('combined'))


mongoose.connect('mongodb://alan:alan123@ds111192.mlab.com:11192/madhacks')
  .catch((err) => {
    console.error('eror: ' + err.stack)
    process.exit(1)
  })
mongoose.connection.on('open', () => {
  console.log('connected to database')
})
mongoose.Promise = global.Promise

app.listen(process.env.port || 4000, () => {
  console.log('Server is up in port 4000.......!')
})