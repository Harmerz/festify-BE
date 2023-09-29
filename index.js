require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')

const Initial = require('./models/initial/role.initial.js')
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })

  .then(() => {
    console.log('DB CONNECTED')
    Initial()
  })
  .catch((err) => {
    console.error('UNABLE to connect to DB:', err)
  })

//middleware
app.use(express.json())

const auth = require('./routes/auth')

app.use('/auth', auth)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
