require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
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

app.listen(process.env.PORT ?? 5000, () => {
  console.log('Server is running on port 5000')
})

module.exports = app
