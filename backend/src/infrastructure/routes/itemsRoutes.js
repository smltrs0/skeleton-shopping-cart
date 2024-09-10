import express from 'express';
import ItemsController from '../controllers/itemsController.js';

const router = express.Router();
const itemsController = new ItemsController();

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get a list of items
 *     tags: [Items]
 *     responses:
 *       200:
 *         description: List of items
 *       500:
 *         description: Internal server error
 */
router.get('/items', (req, res) => itemsController.fetchItemsList(req, res));

export default router;