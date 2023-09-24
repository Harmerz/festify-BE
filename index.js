const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    console.log('DB CONNECTED')
  })
  .catch((err) => {
    console.error('UNABLE to connect to DB:', err)
  })

//middleware
app.use(express.json())

const karyawan = require('./routes/karyawan')
app.use('/karyawan', karyawan)


const order = require('./routes/order')
app.use('/orders', order)

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})

module.exports = app
