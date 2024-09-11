import express from 'express';
import bodyParser from 'body-parser';
import paymentRoutes from './src/infrastructure/routes/paymentRoutes.js';
import itemsRoutes from './src/infrastructure/routes/itemsRoutes.js';
import setupSwagger from './src/swagger.js';

const app = express();
app.use(bodyParser.json());
app.use('/api', paymentRoutes);
app.use('/api', paymentRoutes);

// Configurar Swagger
setupSwagger(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
