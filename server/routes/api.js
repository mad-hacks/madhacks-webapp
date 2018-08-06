const express = require('express')
const {
  contact,
  register
} = require('../models/mongouser.js')

const app = express()

app.post('/contact', (req, res) => {
  contact.create(req.body)
  .then(() => {
    res.send({
      "status": "ok"
    })
  })
  .catch(err => console.log(err))
})

app.post('/register', (req, res) => {
  register.create(req.body)
  .then(() => {
    res.send({
      "status": "ok"
    })
  })
  .catch(err => console.log(err))
})


module.exports = app