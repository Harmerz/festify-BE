const express = require('express')
const router = express.Router()
const { getRecipe, addRecipe } = require('../controllers/recipe')

router.get('/', getRecipe)
router.post('/', addRecipe)

module.exports = router
