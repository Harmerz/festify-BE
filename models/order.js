const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  items: [
    {
      product: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  karyawan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Karyawan',
  },
})

module.exports = mongoose.model('Order', orderSchema)