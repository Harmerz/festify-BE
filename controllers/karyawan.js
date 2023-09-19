const Karyawan = require('../models/karyawan')

exports.getKaryawan = (req, res) => {
  Karyawan.find()
    .then((karyawan) => {
      if (!karyawan) return res.status(404).json({ message: 'Karyawan tidak ditemukan' })
      return res.json(karyawan)
    })
    .catch((err) => console.log(err))
}

exports.addKaryawan = (req, res) => {
  const karyawan = new Karyawan({
    Id: req.body.id,
    name: req.body.name,
    jabatan: req.body.jabatan,
  })
  karyawan.save((err, karyawan) => {
    if (err) return res.status(500).json({ error: err })
    return res.json(karyawan)
  })
}
