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

/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API for managing orders in a grocery store.
 */

/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders
 *     tags: [Orders]
 *     description: Retrieve a list of all orders in the grocery store.
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error
 */
router.get('/', getOrders)

/**
 * @swagger
 * /orders/{id}:
 *   get:
 *     summary: Get a specific order by ID
 *     tags: [Orders]
 *     description: Retrieve a specific order in the grocery store by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order
 *     responses:
 *       200:
 *         description: The order with the specified ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getOrderById)

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Create a new order
 *     tags: [Orders]
 *     description: Create a new order in the grocery store.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       201:
 *         description: The created order
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/', addOrder)

/**
 * @swagger
 * /orders/{id}:
 *   put:
 *     summary: Update an existing order by ID
 *     tags: [Orders]
 *     description: Update an existing order in the grocery store by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Order'
 *     responses:
 *       200:
 *         description: The updated order
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.put('/:id', updateOrderById)

/**
 * @swagger
 * /orders/{id}:
 *   delete:
 *     summary: Delete an order by ID
 *     tags: [Orders]
 *     description: Delete an order in the grocery store by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the order to delete
 *     responses:
 *       204:
 *         description: No content (successful delete)
 *       404:
 *         description: Order not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteOrderById)

/**
 * @swagger
 * /orders/profit:
 *   get:
 *     summary: Calculate Total Profit
 *     tags: [Orders]
 *     description: Calculate the total profit from all orders.
 *     responses:
 *       200:
 *         description: Total profit calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Order'
 *       500:
 *         description: Internal server error
 */
router.get('/profit', calculateTotalProfit)

module.exports = router
