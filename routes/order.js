const express = require('express')
const router = express.Router()
const {
  getOrders,
  getOrderById,
  addOrder,
  updateOrderById,
  deleteOrderById,
  calculateTotalProfit,
} = require('../controllers/order')

router.get('/', getOrders);

router.get('/:id', getOrderById);

router.post('/', addOrder);

router.put('/:id', updateOrderById);

router.delete('/:id', deleteOrderById);

router.get('/profit', calculateTotalProfit);

module.exports = router;