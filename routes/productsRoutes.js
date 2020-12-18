import express from 'express';
const router = express.Router();
import {
  getProductByCategory,
  getProducts,
} from '../controllers/productsController.js';

router.route('/').get(getProducts);
router.route('/:category').get(getProductByCategory);
export default router;
