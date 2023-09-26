const express = require('express')
const router = express.Router()
const { calculateTotalProfit } = require('../controllers/order')

/**
 * @swagger
 * /finance/profit:
 *   get:
 *     summary: Calculate Total Profit
 *     tags: [Finance]
 *     description: Calculate the total profit from all orders.
 *     responses:
 *       200:
 *         description: Total profit calculated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TotalProfitResponse'
 *       500:
 *         description: Internal server error
 */
router.get('/profit', calculateTotalProfit)

module.exports = router