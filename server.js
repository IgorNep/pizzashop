import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import usersRoutes from './routes/usersRoutes.js';
import productsRoutes from './routes/productsRoutes.js';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server started at port ${PORT}`.yellow.bold)
);

app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);

app.use(notFound);
app.use(errorHandler);
