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
  .catch((e) => {
    console.log('UNABLE to connect to DB\n error : ', e)
  })

//middleware
app.use(express.json())

const karyawan = require('./routes/karyawan')
app.use('/karyawan', karyawan)

const inventory = require('./routes/inventory')
app.use('/inventory', inventory)

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})

module.exports = app
