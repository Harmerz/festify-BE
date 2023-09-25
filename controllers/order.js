const Order = require('../models/order')
const { calculateTotalPrice } = require('./utils/order_utils');

exports.addOrder = (req, res) => {
  const totalPrice = calculateTotalPrice(req.body.items)

  const newOrder = new Order({
    date: new Date(),
    items: req.body.items,
    karyawan: req.body.karyawan,
    totalPrice: totalPrice
  })

  newOrder.validate((err) => {
    if (err) {
      res.status(400).json({ error: err.message })
    } else {
      newOrder
        .save()
        .then((order) => {
          res.status(201).json(order)
        })
        .catch((err) => {
          res.status(500).json({ error: err.message })
        })
    }
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

exports.updateOrderById = async (req, res) => {
  try {
    const newTotalPrice = calculateTotalPrice(req.body.items)

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        date: new Date(),
        items: req.body.items,
        totalPrice: newTotalPrice,
      },
      { new: true }
    )

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' })
    }

    res.status(200).json(updatedOrder)
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
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

exports.calculateTotalProfit = (req, res) => {
  Order.aggregate([
    {
      $group: {
        _id: null,
        totalProfit: { $sum: '$totalPrice' },
      },
    },
  ])
    .then((result) => {
      if (result.length === 0) {
        res.status(200).json({ totalProfit: 0 })
      } else {
        res.status(200).json({ totalProfit: result[0].totalProfit })
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message })
    })
}