const mongoose = require('mongoose')

const Schema = mongoose.Schema
mongoose.Promise = global.Promise

const contactschema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneno: {
    type: Number
  },
  description: {
    type: String
  }
})

const registerschema = new Schema({
  student_name: {
    type: String
  },
  student_email: {
    type: String
  },
  college: {
    type: String
  },
  branch: {
    type: String
  },
  year: {
    type: String
  },
  mobno: {
    type: number
  },
  area_of_interest: {
    type: String
  },
  hobbies: {
    type: String
  }
})

const contact = mongoose.model('contactmodel', contactschema)
const register = mongoose.model('registermodel', registerschema)
module.exports = {
  contact,
  register
}
