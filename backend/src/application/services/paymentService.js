import Payment from '../../domain/models/payment.js';

class PaymentService {
    constructor(paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    async createPayment(card, shipment) {
        const payment = new Payment(card, shipment);
        return await this.paymentRepository.save(payment);
    }

    async getPayment(id) {
        return await this.paymentRepository.findById(id);
    }
}

export default PaymentService;