class PaymentController {
    constructor(paymentService) {
        this.paymentService = paymentService;
    }

    async createPayment(req, res) {
        const { card, shipment } = req.body;
        const payment = await this.paymentService.createPayment(card, shipment);
        res.status(201).json(payment);
    }
}

export default PaymentController;