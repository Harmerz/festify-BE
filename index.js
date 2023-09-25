const express = require('express'),
  bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerOption = require('./swagger'),
  swaggerUi = require('swagger-ui-express'),
  specs = swaggerJsdoc(swaggerOption)

const app = express()
const port = process.env.PORT || 5000
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

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

module.exports = app
