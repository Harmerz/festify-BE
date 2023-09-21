const Order = require('../models/order')

exports.addOrder = (req, res) => {
  const newOrder = new Order({
    Id: req.body.Id,
    date: req.body.date,
    items: req.body.items,
    totalPrice: req.body.totalPrice,
    karyawan: req.body.karyawan,
  })

  newOrder
    .save()
    .then((order) => {
      res.status(201).json(order)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}

exports.getOrders = (req, res) => {
  Order.find()
    .then((orders) => {
      res.status(200).json(orders)
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}

exports.getOrderById = (req, res) => {
  Order.findById(req.params.id)
    .then((order) => {
      if (!order) {
        res.status(404).json({ message: 'Order not found' })
      } else {
        res.status(200).json(order)
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}

exports.updateOrderById = (req, res) => {
  Order.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((order) => {
      if (!order) {
        res.status(404).json({ message: 'Order not found' })
      } else {
        res.status(200).json(order)
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}

exports.deleteOrderById = (req, res) => {
  Order.findByIdAndRemove(req.params.id)
    .then((order) => {
      if (!order) {
        res.status(404).json({ message: 'Order not found' })
      } else {
        res.status(204).json()
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}