const express = require('express')
const app = express()
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
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

//swagger config
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Inventory API',
      version: '1.0.0',
    },
  },
  apis:  ['./routes/inventory.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

//serve swagger ui
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(5000, () => {
  console.log('Server is running on port 5000')
})

module.exports = app
