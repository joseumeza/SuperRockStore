const mongoose = require('mongoose')

const rockSchema = new mongoose.Schema({
  name: String, 
  description: String, 
  stock: Number, 
  birthstone: String, 
  color: [String],
})

exports.Rock = new mongoose.model('rock', rockSchema)
