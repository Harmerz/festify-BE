const express = require('express')
const router = express.Router()
const { getInventory, addInventory, deleteInventory, updateInventory } = require('../controllers/inventory')

router.get('/', getInventory)
router.post('/', addInventory)
router.put('/', updateInventory)
router.delete('/', deleteInventory)

module.exports = router
