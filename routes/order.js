const express = require('express')
const router = express.Router()
const {
  getOrders,
  getOrderById,
  addOrder,
  updateOrderById,
  deleteOrderById,
} = require('../controllers/order')

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', addOrder);

router.put('/:id', updateOrderById);

router.delete('/:id', deleteOrderById);

module.exports = router;