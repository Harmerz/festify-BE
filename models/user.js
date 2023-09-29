const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String, unique: true },
  username: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
  transaction: [
    {
      name: String,
      start_date: String,
      end_date: String,
      total: Number,
      image: String,
      status: String,
    },
  ],
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role',
    },
  ],
})

module.exports = mongoose.model('user', userSchema)
