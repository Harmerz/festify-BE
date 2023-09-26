const express = require('express'),
  bodyParser = require('body-parser'),
  swaggerJsdoc = require('swagger-jsdoc'),
  swaggerOption = require('./swagger'),
  swaggerUi = require('swagger-ui-express'),
  specs = swaggerJsdoc(swaggerOption)
const app = express()
const port = process.env.PORT || 5000
const mongoose = require('mongoose')
const swaggerJsDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')
require('dotenv').config()

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

const order = require('./routes/order')
app.use('/orders', order)

const finance = require('./routes/finance')
app.use('/finance', finance)

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))

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
    components: {
      schemas: {
        Inventory: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
            },
            desc: {
              type: 'string',
            },
            type: {
              type: 'string',
            },
            quantity: {
              type: 'number',
            },
            qtype: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
          },
          required: ['name', 'desc', 'type', 'qtype', 'price'], // Define required properties
        },
      },
    },
  },
  apis: ['./routes/inventory.js'],
};


const swaggerDocs = swaggerJsDoc(swaggerOptions);

//serve swagger ui
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)

module.exports = app
