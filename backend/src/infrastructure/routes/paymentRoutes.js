import  express from 'express';
import  PaymentService from '../../application/services/paymentService.js';
import  PaymentController from '../controllers/paymentController.js';
import PaymentRepository from '../repositories/paymentRepository.js';

const router = express.Router();
const paymentRepository = new PaymentRepository();
const paymentService = new PaymentService(paymentRepository);
const paymentController = new PaymentController(paymentService);

/**
 * @swagger
 * /payments:
 *   post:
 *     summary: Create a new payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               card:
 *                 type: string
 *               shipment:
 *                 type: string
 *     responses:
 *       201:
 *         description: Payment created successfully
 *       500:
 *         description: Internal server error
 */
router.post('/payments', (req, res) => paymentController.createPayment(req, res));

/**
 * @swagger
 * /payments/{id}:
 *   get:
 *     summary: Get a payment by ID
 *     tags: [Payments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       200:
 *         description: Payment found
 *       404:
 *         description: Payment not found
 */
router.get('/payments/:id', (req, res) => paymentController.getPayment(req, res));

export default router;