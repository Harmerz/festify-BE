const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  ingredient: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Recipe', recipeSchema)
