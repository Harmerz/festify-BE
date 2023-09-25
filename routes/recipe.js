const express = require('express')
const router = express.Router()
const { getRecipe, getOneRecipe, addRecipe, deleteRecipe, updateRecipe } = require('../controllers/recipe')

/**
 * @swagger
 * tags:
 *   name: Recipe
 *   description: Recipe operations
 */


//read-swagger
/**
 * @swagger
 * /recipe:
 *   get:
 *     summary: Get a list of recipe items
 *     tags: [Recipe]
 *     responses:
 *       '200':
 *         description: Successful response
 */
router.get('/', getRecipe)

//read-swagger
/**
 * @swagger
 * /recipe/{id}:
 *   get:
 *     summary: Get a recipe by ID
 *     tags: [Recipe]
 *     responses:
 *       '200':
 *         description: Successful response
 *       '400':
 *         description: Invalid status value
 */
router.get('/:id', getOneRecipe)

//create-swagger
/**
 * @swagger
 * /recipe:
 *   post:
 *     summary: Create a new recipe item
 *     tags: [Recipe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       '201':
 *         description: Recipe item created
 */
router.post('/', addRecipe)

//delete-swagger
/**
 * @swagger
 * /recipe/{id}:
 *   delete:
 *     summary: Delete an recipe item
 *     tags: [Recipe]
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
 *         description: Recipe item deleted
 */
router.delete('/:id', deleteRecipe)

//update-swagger
/**
 * @swagger
 * /recipe/{id}:
 *   put:
 *     summary: Update an existing recipe item
 *     tags: [Recipe]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Recipe'
 *     responses:
 *       '200':
 *         description: Recipe item updated
 */
router.put('/:id', updateRecipe)

module.exports = router