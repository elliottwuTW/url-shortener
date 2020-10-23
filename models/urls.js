/**
 * define an url schema and build to the URL model
 */
const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true
  },
  shorten: String
})

module.exports = mongoose.model('Url', urlSchema)
