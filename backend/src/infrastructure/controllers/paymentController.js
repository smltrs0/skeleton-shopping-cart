class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async createPayment(req, res) {
        const { card, shipment } = req.body;
        const payment = await this.paymentService.createPayment(card, shipment);
        res.status(201).json(payment);
    }

    async getPayment(req, res) {
        const { id } = req.params;
        const payment = await this.paymentService.getPayment(id);
        if (payment) {
            res.status(200).json(payment);
        } else {
            res.status(404).json({ message: 'Payment not found' });
        }
    }
}

export default PaymentController;