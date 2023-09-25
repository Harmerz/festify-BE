const express = require('express')
const router = express.Router()
const { getInventory, addInventory, deleteInventory, updateInventory } = require('../controllers/inventory')

/**
 * @swagger
 * tags:
 *   name: Inventory
 *   description: Inventory operations
 */

//read-swagger
/**
 * @swagger
 * /inventory:
 *   get:
 *     summary: Get a list of inventory items
 *     tags: [Inventory]
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.get('/', getInventory);

//create-swagger
/**
 * @swagger
 * /inventory:
 *   post:
 *     summary: Create a new inventory item
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       '201':
 *         description: Inventory item created
 */
router.post('/', addInventory);

//update-swagger
/**
 * @swagger
 * /inventory:
 *   put:
 *     summary: Update an existing inventory item
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Inventory'
 *     responses:
 *       '200':
 *         description: Inventory item updated
 */
router.put('/', updateInventory);

//delete-swagger
/**
 * @swagger
 * /inventory:
 *   delete:
 *     summary: Delete an inventory item
 *     tags: [Inventory]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *             required:
 *               - _id
 *     responses:
 *       '200':
 *         description: Inventory item deleted
 */
router.delete('/', deleteInventory);

module.exports = router
