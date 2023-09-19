const mongoose = require('mongoose')

const karyawanSchema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  jabatan: {
    type: String,
  },
})

module.exports = mongoose.model('Karyawan', karyawanSchema)
