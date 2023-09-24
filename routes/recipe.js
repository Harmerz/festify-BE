const express = require('express')
const router = express.Router()
const { getRecipe, getOneRecipe, addRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipe')

router.get('/', getRecipe)
router.get('/:id', getOneRecipe)
router.post('/', addRecipe)
router.delete('/:id', deleteRecipe)
router.patch('/:id', updateRecipe)

module.exports = router