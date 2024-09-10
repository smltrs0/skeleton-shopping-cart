class PaymentRepository {
    constructor() {
        this.payments = new Map();
    }

    async save(payment) {
        const id = this.payments.size + 1;
        this.payments.set(id, payment);
        return { id, ...payment };
    }

    async findById(id) {
        return this.payments.get(id);
    }
}

export default PaymentRepository;