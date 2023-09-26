require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Initial = require('./models/initial/role.initial.js')
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })

  .then(() => {
    console.log('DB CONNECTED')
    Initial()
  })
  .catch((e) => {
    console.log('UNABLE to connect to DB', e)
  })

//middleware
app.use(express.json())

// Routes Require and Uses
const recipe = require('./routes/recipe')
const auth = require('./routes/auth')
app.use('/recipe', recipe)
app.use('/auth', auth)

app.listen(process.env.PORT ?? 5000, () => {
  console.log('Server is running on port 5000')
})

module.exports = app
