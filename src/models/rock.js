const mongoose = require('mongoose')

const rockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }, 
  description: {
    type: String,
    required: true,
  }, 
  stock: {
    type: Number,
    min: 0,
    required: true,
  }, 
  birthstone: {
    type: String,
    required: true,
  }, 
  color: {
    type: [String],
    required: true,
  },
  image: {
    type: String
  }
})

exports.Rock = new mongoose.model('rock', rockSchema)
